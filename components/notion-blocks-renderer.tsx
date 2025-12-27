'use client'

import type { BlockObjectResponse, RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'
import Link from 'next/link'

// Helper to render rich text with formatting
function renderRichText(richText: RichTextItemResponse[]): React.ReactNode[] {
    return richText.map((text, index) => {
        let content: React.ReactNode = text.plain_text

        if (text.annotations.bold) {
            content = <strong key={`bold-${index}`}>{content}</strong>
        }
        if (text.annotations.italic) {
            content = <em key={`italic-${index}`}>{content}</em>
        }
        if (text.annotations.strikethrough) {
            content = <s key={`strike-${index}`}>{content}</s>
        }
        if (text.annotations.underline) {
            content = <u key={`underline-${index}`}>{content}</u>
        }
        if (text.annotations.code) {
            content = (
                <code key={`code-${index}`} className="px-1.5 py-0.5 rounded bg-muted font-mono text-sm">
                    {content}
                </code>
            )
        }
        if (text.href) {
            content = (
                <Link
                    key={`link-${index}`}
                    href={text.href}
                    className="text-primary underline hover:no-underline"
                    target={text.href.startsWith('http') ? '_blank' : undefined}
                    rel={text.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                    {content}
                </Link>
            )
        }

        return <span key={index}>{content}</span>
    })
}

// Props for the renderer
interface NotionBlocksRendererProps {
    blocks: BlockObjectResponse[]
}

// Main component to render Notion blocks
export function NotionBlocksRenderer({ blocks }: NotionBlocksRendererProps) {
    return (
        <div className="prose prose-lg dark:prose-invert max-w-none">
            {blocks.map((block) => renderBlock(block))}
        </div>
    )
}

// Render individual block based on type
function renderBlock(block: BlockObjectResponse): React.ReactNode {
    const { id, type } = block

    switch (type) {
        case 'paragraph': {
            const { paragraph } = block
            if (!paragraph.rich_text.length) {
                return <p key={id} className="my-4">&nbsp;</p>
            }
            return (
                <p key={id} className="my-4 leading-relaxed">
                    {renderRichText(paragraph.rich_text)}
                </p>
            )
        }

        case 'heading_1': {
            const { heading_1 } = block
            return (
                <h1 key={id} className="text-3xl font-bold mt-8 mb-4">
                    {renderRichText(heading_1.rich_text)}
                </h1>
            )
        }

        case 'heading_2': {
            const { heading_2 } = block
            return (
                <h2 key={id} className="text-2xl font-bold mt-6 mb-3">
                    {renderRichText(heading_2.rich_text)}
                </h2>
            )
        }

        case 'heading_3': {
            const { heading_3 } = block
            return (
                <h3 key={id} className="text-xl font-semibold mt-5 mb-2">
                    {renderRichText(heading_3.rich_text)}
                </h3>
            )
        }

        case 'bulleted_list_item': {
            const { bulleted_list_item } = block
            return (
                <li key={id} className="ml-4 list-disc">
                    {renderRichText(bulleted_list_item.rich_text)}
                </li>
            )
        }

        case 'numbered_list_item': {
            const { numbered_list_item } = block
            return (
                <li key={id} className="ml-4 list-decimal">
                    {renderRichText(numbered_list_item.rich_text)}
                </li>
            )
        }

        case 'to_do': {
            const { to_do } = block
            return (
                <div key={id} className="flex items-start gap-2 my-2">
                    <input
                        type="checkbox"
                        checked={to_do.checked}
                        readOnly
                        className="mt-1.5"
                    />
                    <span className={to_do.checked ? 'line-through text-muted-foreground' : ''}>
                        {renderRichText(to_do.rich_text)}
                    </span>
                </div>
            )
        }

        case 'toggle': {
            const { toggle } = block
            return (
                <details key={id} className="my-4">
                    <summary className="cursor-pointer font-medium">
                        {renderRichText(toggle.rich_text)}
                    </summary>
                </details>
            )
        }

        case 'code': {
            const { code } = block
            return (
                <pre key={id} className="my-4 p-4 rounded-lg bg-muted overflow-x-auto">
                    <code className="text-sm font-mono">
                        {code.rich_text.map((text) => text.plain_text).join('')}
                    </code>
                </pre>
            )
        }

        case 'quote': {
            const { quote } = block
            return (
                <blockquote key={id} className="border-l-4 border-primary pl-4 my-4 italic">
                    {renderRichText(quote.rich_text)}
                </blockquote>
            )
        }

        case 'callout': {
            const { callout } = block
            const emoji = callout.icon?.type === 'emoji' ? callout.icon.emoji : '💡'
            return (
                <div key={id} className="flex gap-3 p-4 my-4 rounded-lg bg-muted/50 border">
                    <span className="text-xl">{emoji}</span>
                    <div>{renderRichText(callout.rich_text)}</div>
                </div>
            )
        }

        case 'divider': {
            return <hr key={id} className="my-8 border-border" />
        }

        case 'image': {
            const { image } = block
            const src = image.type === 'external' ? image.external.url : image.file.url
            const caption = image.caption.length > 0
                ? image.caption.map((c) => c.plain_text).join('')
                : ''
            return (
                <figure key={id} className="my-6">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={src}
                        alt={caption || 'Blog image'}
                        className="rounded-lg w-full"
                    />
                    {caption && (
                        <figcaption className="text-center text-sm text-muted-foreground mt-2">
                            {caption}
                        </figcaption>
                    )}
                </figure>
            )
        }

        case 'video': {
            const { video } = block
            const src = video.type === 'external' ? video.external.url : video.file.url
            return (
                <div key={id} className="my-6 aspect-video">
                    <video src={src} controls className="rounded-lg w-full h-full" />
                </div>
            )
        }

        case 'embed': {
            const { embed } = block
            return (
                <div key={id} className="my-6">
                    <iframe
                        src={embed.url}
                        className="w-full aspect-video rounded-lg border"
                        allowFullScreen
                    />
                </div>
            )
        }

        case 'bookmark': {
            const { bookmark } = block
            return (
                <a
                    key={id}
                    href={bookmark.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block my-4 p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                >
                    <span className="text-primary underline">{bookmark.url}</span>
                </a>
            )
        }

        default:
            // Unsupported block type
            console.log(`Unsupported block type: ${type}`)
            return null
    }
}
