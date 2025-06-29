import React from 'react'
import BlogPost from '@/components/BlogPost'
import { getAllPosts } from '@/scripts/utils'
import Link from 'next/link'

export default function Words({ allPosts }: { allPosts: PostMetaData[] }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <main className="container-center py-16 px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
            Words
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My learning notes and thoughts on software development
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
          <div className="space-y-6">
            {allPosts.map((post) => (
              <div
                key={post.key}
                className="flex items-center py-4 border-b border-gray-200 last:border-b-0"
              >
                <span className="text-sm text-gray-500 font-mono mr-6 min-w-[100px]">
                  {post.date}
                </span>
                <Link
                  href={post.linkPath}
                  className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300 hover:underline"
                >
                  {post.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const allPosts = await getAllPosts()
  return {
    props: { allPosts },
  }
}
