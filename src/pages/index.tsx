import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <main className="container-center py-16 px-6">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
            <Image
              className="relative rounded-full border-4 border-white shadow-2xl hover:scale-105 transition-transform duration-300"
              src="/profile.png"
              width={180}
              height={180}
              alt="Cong Dao's avatar"
              priority
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
            Hi there, I&apos;m Cong!
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            I&apos;m a software developer passionate about creating meaningful applications and sharing knowledge with the community. 
            I love building tools that solve real problems and contribute to open source projects.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Java</span>
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Spring Boot</span>
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">React</span>
            <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">Node.js</span>
            <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">TypeScript/JavaScript</span>
            <span className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">Next.js</span>
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Go</span>
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">AI</span>
          </div>
        </div>

        {/* Welcome Section */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 mb-16 shadow-lg border border-white/20">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome to my space on the web</h2>
          <p className="text-gray-600 leading-relaxed">
            Here you&apos;ll find my projects, thoughts, and contributions to the developer community. 
            I believe in building software that makes a difference and sharing knowledge to help others grow.
          </p>
        </div>

        {/* Projects Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="Words"
              description="Writing my learning notes and sharing insights about software development"
              href="/words"
              isInternal={true}
              featured={true}
            />
            <ProjectCard
              title="Pay Stub Generator"
              description="Create professional pay stubs for free with our easy-to-use generator"
              href="https://stubify.congdv.com/"
              isInternal={false}
              featured={true}
            />
            <ProjectCard
              title="Feedback App"
              description="Create your own feedback space and collect valuable insights from customers"
              href="https://feedback.congdv.com/"
              isInternal={false}
              featured={true}
            />
            <ProjectCard
              title="notemd.app"
              description="A modern text editor for writing Markdown with Vim's key binding support"
              href="https://notemd.congdv.com/"
              isInternal={false}
              featured={false}
            />
            <ProjectCard
              title="Snake Game"
              description="A classic web-based snake game built with modern web technologies"
              href="https://congdv.github.io/snake-clone/"
              isInternal={false}
              featured={false}
            />
            <ProjectCard
              title="30 Days of Sharing"
              description="A collection of frontend/web development knowledge organized by WeBuild Community"
              href="https://30daysofsharing.congdv.com/"
              isInternal={false}
              featured={false}
            />
          </div>
        </div>

      </main>
    </div>
  )
}

// Project Card Component
function ProjectCard({ title, description, href, isInternal, featured }: {
  title: string
  description: string
  href: string
  isInternal: boolean
  featured?: boolean
}) {
  return (
    <div className={`group bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${featured ? 'ring-2 ring-blue-200' : ''}`}>
      <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
        {isInternal ? (
          <Link href={href} className="hover:underline">
            {title}
          </Link>
        ) : (
          <Link
            href={href}
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
            <span className="inline-block ml-2 text-sm text-gray-400">↗</span>
          </Link>
        )}
      </h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
      {featured && (
        <div className="mt-4">
          <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
            Featured
          </span>
        </div>
      )}
    </div>
  )
}
