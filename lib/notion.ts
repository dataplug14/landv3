import { Client } from '@notionhq/client'
import type {
    PageObjectResponse,
    BlockObjectResponse,
    RichTextItemResponse,
} from '@notionhq/client/build/src/api-endpoints'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type NotionProperty = any

// Initialize Notion client
const notion = new Client({
    auth: process.env.NOTION_TOKEN,
})

const blogDatabaseId = process.env.NOTION_BLOG_DATABASE_ID!
const jobsDatabaseId = process.env.NOTION_JOBS_DATABASE_ID!
const applicationsDatabaseId = process.env.NOTION_APPLICATIONS_DATABASE_ID!

// ==========================================
// BLOG TYPES AND FUNCTIONS
// ==========================================

// Type for blog post
export interface BlogPost {
    id: string
    slug: string
    title: string
    excerpt: string
    author: string
    date: string
    category: string
    readTime: string
}

// Type for blog post with content
export interface BlogPostWithContent extends BlogPost {
    content: BlockObjectResponse[]
}

// ==========================================
// JOB TYPES AND FUNCTIONS
// ==========================================

// Type for job listing
export interface JobListing {
    id: string
    slug: string
    title: string
    department: string
    location: string
    type: string
    salary: string
    description: string
    requirements: string[]
    responsibilities: string[]
}

// Type for job listing with content
export interface JobListingWithContent extends JobListing {
    content: BlockObjectResponse[]
}

// Type for job application
export interface JobApplication {
    jobId: string
    jobTitle: string
    fullName: string
    email: string
    phone?: string
    resumeUrl?: string
    portfolioUrl?: string
    coverLetter?: string
    linkedinUrl?: string
}

// ==========================================
// HELPER FUNCTIONS
// ==========================================

// Helper to extract text from rich text array
function getRichTextContent(richText: RichTextItemResponse[]): string {
    return richText.map((text) => text.plain_text).join('')
}

// Helper to calculate read time (rough estimate: 200 words per minute)
function calculateReadTime(blocks: BlockObjectResponse[]): string {
    let wordCount = 0

    for (const block of blocks) {
        if ('paragraph' in block && block.paragraph?.rich_text) {
            wordCount += getRichTextContent(block.paragraph.rich_text).split(/\s+/).length
        } else if ('heading_1' in block && block.heading_1?.rich_text) {
            wordCount += getRichTextContent(block.heading_1.rich_text).split(/\s+/).length
        } else if ('heading_2' in block && block.heading_2?.rich_text) {
            wordCount += getRichTextContent(block.heading_2.rich_text).split(/\s+/).length
        } else if ('heading_3' in block && block.heading_3?.rich_text) {
            wordCount += getRichTextContent(block.heading_3.rich_text).split(/\s+/).length
        } else if ('bulleted_list_item' in block && block.bulleted_list_item?.rich_text) {
            wordCount += getRichTextContent(block.bulleted_list_item.rich_text).split(/\s+/).length
        } else if ('numbered_list_item' in block && block.numbered_list_item?.rich_text) {
            wordCount += getRichTextContent(block.numbered_list_item.rich_text).split(/\s+/).length
        }
    }

    const minutes = Math.ceil(wordCount / 200)
    return `${minutes} min read`
}

// Helper to extract list items from blocks
function extractListItems(blocks: BlockObjectResponse[], type: 'requirements' | 'responsibilities'): string[] {
    const items: string[] = []
    let isInSection = false

    for (const block of blocks) {
        // Check for heading that matches the section
        if ('heading_2' in block || 'heading_3' in block) {
            const headingText = 'heading_2' in block
                ? getRichTextContent(block.heading_2?.rich_text || []).toLowerCase()
                : getRichTextContent(block.heading_3?.rich_text || []).toLowerCase()

            if (headingText.includes(type)) {
                isInSection = true
                continue
            } else if (isInSection) {
                // We've moved to a different section
                break
            }
        }

        // Collect list items if we're in the right section
        if (isInSection && 'bulleted_list_item' in block) {
            items.push(getRichTextContent(block.bulleted_list_item?.rich_text || []))
        }
    }

    return items
}

// ==========================================
// BLOG API FUNCTIONS
// ==========================================

// Fetch all blog posts from Notion database
export async function getBlogPosts(): Promise<BlogPost[]> {
    try {
        const response = await notion.databases.query({
            database_id: blogDatabaseId,
            sorts: [
                {
                    property: 'Date',
                    direction: 'descending',
                },
            ],
        })

        const posts: BlogPost[] = []

        for (const page of response.results) {
            if (page.object !== 'page' || !('properties' in page)) continue

            const pageObj = page as PageObjectResponse
            const properties = pageObj.properties

            // Extract properties with type guards
            const titleProp = properties.Title
            const excerptProp = properties.Excerpt
            const authorProp = properties.Author
            const dateProp = properties.Date
            const categoryProp = properties.Category
            const slugProp = properties.Slug

            const title = titleProp?.type === 'title'
                ? getRichTextContent(titleProp.title)
                : 'Untitled'

            const excerpt = excerptProp?.type === 'rich_text'
                ? getRichTextContent(excerptProp.rich_text)
                : ''

            const author = authorProp?.type === 'rich_text'
                ? getRichTextContent(authorProp.rich_text)
                : 'Unknown'

            const date = dateProp?.type === 'date' && dateProp.date?.start
                ? dateProp.date.start
                : new Date().toISOString().split('T')[0]

            const category = categoryProp?.type === 'select' && categoryProp.select?.name
                ? categoryProp.select.name
                : 'General'

            const slug = slugProp?.type === 'rich_text'
                ? getRichTextContent(slugProp.rich_text)
                : pageObj.id

            // Fetch page content to calculate read time
            const blocks = await getPageContent(pageObj.id)
            const readTime = calculateReadTime(blocks)

            posts.push({
                id: pageObj.id,
                slug,
                title,
                excerpt,
                author,
                date,
                category,
                readTime,
            })
        }

        return posts
    } catch (error) {
        console.error('Error fetching blog posts from Notion:', error)
        return []
    }
}

// Fetch a single blog post by slug
export async function getBlogPost(slug: string): Promise<BlogPostWithContent | null> {
    try {
        const response = await notion.databases.query({
            database_id: blogDatabaseId,
            filter: {
                property: 'Slug',
                rich_text: {
                    equals: slug,
                },
            },
        })

        if (response.results.length === 0) {
            return null
        }

        const page = response.results[0]
        if (page.object !== 'page' || !('properties' in page)) return null

        const pageObj = page as PageObjectResponse
        const properties = pageObj.properties

        // Extract properties
        const titleProp = properties.Title
        const excerptProp = properties.Excerpt
        const authorProp = properties.Author
        const dateProp = properties.Date
        const categoryProp = properties.Category
        const slugProp = properties.Slug

        const title = titleProp?.type === 'title'
            ? getRichTextContent(titleProp.title)
            : 'Untitled'

        const excerpt = excerptProp?.type === 'rich_text'
            ? getRichTextContent(excerptProp.rich_text)
            : ''

        const author = authorProp?.type === 'rich_text'
            ? getRichTextContent(authorProp.rich_text)
            : 'Unknown'

        const date = dateProp?.type === 'date' && dateProp.date?.start
            ? dateProp.date.start
            : new Date().toISOString().split('T')[0]

        const category = categoryProp?.type === 'select' && categoryProp.select?.name
            ? categoryProp.select.name
            : 'General'

        const postSlug = slugProp?.type === 'rich_text'
            ? getRichTextContent(slugProp.rich_text)
            : pageObj.id

        // Fetch page content
        const content = await getPageContent(pageObj.id)
        const readTime = calculateReadTime(content)

        return {
            id: pageObj.id,
            slug: postSlug,
            title,
            excerpt,
            author,
            date,
            category,
            readTime,
            content,
        }
    } catch (error) {
        console.error('Error fetching blog post from Notion:', error)
        return null
    }
}

// Get all post slugs for static generation
export async function getAllPostSlugs(): Promise<string[]> {
    const posts = await getBlogPosts()
    return posts.map(post => post.slug)
}

// ==========================================
// JOBS API FUNCTIONS
// ==========================================

// Fetch all job listings from Notion database
export async function getJobListings(): Promise<JobListing[]> {
    try {
        const response = await notion.databases.query({
            database_id: jobsDatabaseId,
            sorts: [
                {
                    property: 'Title',
                    direction: 'ascending',
                },
            ],
        })

        const jobs: JobListing[] = []

        for (const page of response.results) {
            if (page.object !== 'page' || !('properties' in page)) continue

            const pageObj = page as PageObjectResponse
            const properties = pageObj.properties

            // Extract properties with type guards
            const titleProp = properties.Title
            const departmentProp = properties.Department
            const locationProp = properties.Location
            const typeProp = properties.Type
            const salaryProp = properties.Salary
            const descriptionProp = properties.Description
            const slugProp = properties.Slug

            const title = titleProp?.type === 'title'
                ? getRichTextContent(titleProp.title)
                : 'Untitled'

            const department = departmentProp?.type === 'select' && departmentProp.select?.name
                ? departmentProp.select.name
                : departmentProp?.type === 'rich_text'
                    ? getRichTextContent(departmentProp.rich_text)
                    : 'General'

            const location = locationProp?.type === 'rich_text'
                ? getRichTextContent(locationProp.rich_text)
                : locationProp?.type === 'select' && locationProp.select?.name
                    ? locationProp.select.name
                    : 'Remote'

            const type = typeProp?.type === 'select' && typeProp.select?.name
                ? typeProp.select.name
                : typeProp?.type === 'rich_text'
                    ? getRichTextContent(typeProp.rich_text)
                    : 'Full-time'

            const salary = salaryProp?.type === 'rich_text'
                ? getRichTextContent(salaryProp.rich_text)
                : 'Competitive'

            const description = descriptionProp?.type === 'rich_text'
                ? getRichTextContent(descriptionProp.rich_text)
                : ''

            const slug = slugProp?.type === 'rich_text'
                ? getRichTextContent(slugProp.rich_text)
                : title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')

            // Fetch page content to extract requirements and responsibilities
            const blocks = await getPageContent(pageObj.id)
            const requirements = extractListItems(blocks, 'requirements')
            const responsibilities = extractListItems(blocks, 'responsibilities')

            jobs.push({
                id: pageObj.id,
                slug,
                title,
                department,
                location,
                type,
                salary,
                description,
                requirements: requirements.length > 0 ? requirements : ['Requirements listed in job description'],
                responsibilities: responsibilities.length > 0 ? responsibilities : ['Responsibilities listed in job description'],
            })
        }

        return jobs
    } catch (error) {
        console.error('Error fetching job listings from Notion:', error)
        return []
    }
}

// Fetch a single job listing by slug
export async function getJobListing(slug: string): Promise<JobListingWithContent | null> {
    try {
        const response = await notion.databases.query({
            database_id: jobsDatabaseId,
            filter: {
                property: 'Slug',
                rich_text: {
                    equals: slug,
                },
            },
        })

        if (response.results.length === 0) {
            return null
        }

        const page = response.results[0]
        if (page.object !== 'page' || !('properties' in page)) return null

        const pageObj = page as PageObjectResponse
        const properties = pageObj.properties

        // Extract properties
        const titleProp = properties.Title
        const departmentProp = properties.Department
        const locationProp = properties.Location
        const typeProp = properties.Type
        const salaryProp = properties.Salary
        const descriptionProp = properties.Description
        const slugProp = properties.Slug

        const title = titleProp?.type === 'title'
            ? getRichTextContent(titleProp.title)
            : 'Untitled'

        const department = departmentProp?.type === 'select' && departmentProp.select?.name
            ? departmentProp.select.name
            : departmentProp?.type === 'rich_text'
                ? getRichTextContent(departmentProp.rich_text)
                : 'General'

        const location = locationProp?.type === 'rich_text'
            ? getRichTextContent(locationProp.rich_text)
            : locationProp?.type === 'select' && locationProp.select?.name
                ? locationProp.select.name
                : 'Remote'

        const type = typeProp?.type === 'select' && typeProp.select?.name
            ? typeProp.select.name
            : typeProp?.type === 'rich_text'
                ? getRichTextContent(typeProp.rich_text)
                : 'Full-time'

        const salary = salaryProp?.type === 'rich_text'
            ? getRichTextContent(salaryProp.rich_text)
            : 'Competitive'

        const description = descriptionProp?.type === 'rich_text'
            ? getRichTextContent(descriptionProp.rich_text)
            : ''

        const jobSlug = slugProp?.type === 'rich_text'
            ? getRichTextContent(slugProp.rich_text)
            : title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')

        // Fetch page content
        const content = await getPageContent(pageObj.id)
        const requirements = extractListItems(content, 'requirements')
        const responsibilities = extractListItems(content, 'responsibilities')

        return {
            id: pageObj.id,
            slug: jobSlug,
            title,
            department,
            location,
            type,
            salary,
            description,
            requirements: requirements.length > 0 ? requirements : ['Requirements listed in job description'],
            responsibilities: responsibilities.length > 0 ? responsibilities : ['Responsibilities listed in job description'],
            content,
        }
    } catch (error) {
        console.error('Error fetching job listing from Notion:', error)
        return null
    }
}

// Get all job slugs for static generation
export async function getAllJobSlugs(): Promise<string[]> {
    const jobs = await getJobListings()
    return jobs.map(job => job.slug)
}

// ==========================================
// APPLICATION SUBMISSION
// ==========================================

// Submit a job application to Notion database
export async function submitJobApplication(application: JobApplication): Promise<{ success: boolean; error?: string }> {
    try {
        await notion.pages.create({
            parent: { database_id: applicationsDatabaseId },
            properties: {
                'Name': {
                    title: [
                        {
                            text: { content: application.fullName },
                        },
                    ],
                },
                'Email': {
                    email: application.email,
                },
                'Phone': {
                    phone_number: application.phone || null,
                },
                'Job': {
                    rich_text: [
                        {
                            text: { content: application.jobTitle },
                        },
                    ],
                },
                'Resume': {
                    url: application.resumeUrl || null,
                },
                'Portfolio': {
                    url: application.portfolioUrl || null,
                },
                'LinkedIn': {
                    url: application.linkedinUrl || null,
                },
                'Cover Letter': {
                    rich_text: [
                        {
                            text: { content: application.coverLetter || '' },
                        },
                    ],
                },
                'Status': {
                    select: { name: 'New' },
                },
                'Applied Date': {
                    date: { start: new Date().toISOString().split('T')[0] },
                },
            },
        })

        return { success: true }
    } catch (error) {
        console.error('Error submitting job application to Notion:', error)
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Failed to submit application'
        }
    }
}

// ==========================================
// SHARED FUNCTIONS
// ==========================================

// Fetch page content blocks
export async function getPageContent(pageId: string): Promise<BlockObjectResponse[]> {
    try {
        const blocks: BlockObjectResponse[] = []
        let cursor: string | undefined

        do {
            const response = await notion.blocks.children.list({
                block_id: pageId,
                start_cursor: cursor,
                page_size: 100,
            })

            for (const block of response.results) {
                if ('type' in block) {
                    blocks.push(block as BlockObjectResponse)
                }
            }

            cursor = response.next_cursor ?? undefined
        } while (cursor)

        return blocks
    } catch (error) {
        console.error('Error fetching page content from Notion:', error)
        return []
    }
}
