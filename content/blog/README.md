# Blog Content Management

This directory is set up for storing blog post content in markdown format.

## How to Add Blog Posts

### Method 1: Direct Data (Current Implementation)
Currently, blog posts are managed directly in `app/blog/page.tsx` in the `blogPosts` array. To add a new post:

1. Open `app/blog/page.tsx`
2. Add a new entry to the `blogPosts` array:

```typescript
{
  slug: 'your-post-slug',
  title: 'Your Post Title',
  excerpt: 'A brief description of your post...',
  author: 'Author Name',
  date: '2025-01-15',
  readTime: '5 min read',
  category: 'Product', // or 'Guide', 'Tutorial', 'Comparison'
  image: '/blog/your-image.jpg',
}
```

### Method 2: Notion CMS Integration (Recommended)
For easier content management, integrate with Notion:

1. Create a Notion database for blog posts
2. Use the Notion API to fetch posts
3. Render posts dynamically on the blog page

**Setup Steps:**
1. Create a Notion integration at https://www.notion.so/my-integrations
2. Create a database in Notion with properties: Title, Excerpt, Author, Date, Category, Slug
3. Share the database with your integration
4. Install `@notionhq/client` package
5. Update `app/blog/page.tsx` to fetch from Notion API

### Method 3: Markdown Files
Store blog posts as markdown files in this directory:

1. Create a new `.md` file: `your-post-slug.md`
2. Add frontmatter with metadata:

```markdown
---
title: Your Post Title
date: 2025-01-15
author: Author Name
category: Tutorial
excerpt: Brief description of your post
---

Your blog post content here...
```

3. Use a library like `gray-matter` and `remark` to parse and render markdown

## Images

Store blog post images in `public/blog/` directory and reference them as `/blog/image-name.jpg`

## Categories

Available categories:
- Product
- Guide
- Tutorial
- Comparison

## Example Blog Post Structure

```
content/blog/
├── introducing-nubis-cloud.md
├── kubernetes-best-practices.md
└── database-performance.md

public/blog/
├── nubis-intro.jpg
├── kubernetes.jpg
└── database.jpg
```
