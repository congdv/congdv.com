import React from 'react'
import Link from 'next/link'

export default function BlogPost({
  children,
  meta,
}: {
  children: any
  meta: any
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <main className="container-center py-16 px-6">
        {/* Back to posts link */}
        <div className="mb-8">
          <Link
            href="/words"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-300 font-medium"
          >
            <span className="mr-2">←</span>
            Back to all posts
          </Link>
        </div>

        {/* Article content */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
          <header className="mb-8 pb-6 border-b border-gray-200">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {meta.title}
            </h1>
            <time className="text-gray-500 font-mono text-sm">{meta.date}</time>
          </header>

          <article className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-code:text-blue-600 prose-code:bg-blue-50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded">
            {children}
          </article>
        </div>
      </main>
    </div>
  )
}
