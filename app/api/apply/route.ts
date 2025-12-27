import { NextRequest, NextResponse } from 'next/server'
import { submitJobApplication } from '@/lib/notion'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()

        // Validate required fields
        const { jobId, jobTitle, fullName, email, phone, resumeUrl, portfolioUrl, coverLetter, linkedinUrl } = body

        if (!jobTitle || !fullName || !email) {
            return NextResponse.json(
                { error: 'Missing required fields: jobTitle, fullName, and email are required' },
                { status: 400 }
            )
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            )
        }

        // Submit application to Notion
        const result = await submitJobApplication({
            jobId: jobId || '',
            jobTitle,
            fullName,
            email,
            phone,
            resumeUrl,
            portfolioUrl,
            coverLetter,
            linkedinUrl,
        })

        if (!result.success) {
            return NextResponse.json(
                { error: result.error || 'Failed to submit application' },
                { status: 500 }
            )
        }

        return NextResponse.json(
            { message: 'Application submitted successfully' },
            { status: 200 }
        )
    } catch (error) {
        console.error('Error processing application:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
