import BlogPost from '@/components/BlogPost'
import { getAllPosts } from '@/scripts/utils'
import Link from 'next/link'

export default function Words({ allPosts }: { allPosts: PostMetaData[] }) {
  return (
    <main className="container-center my-10 min-h-full flex-1">
      {allPosts.map((post) => {
        return (
          <p key={post.key}>
            <span className="mr-5 text-sm">{post.date}</span>
            <Link href={post.linkPath} className="hover:underline font-bold">
              {post.title}
            </Link>
          </p>
        )
      })}
    </main>
  )
}

export async function getStaticProps() {
  const allPosts = await getAllPosts()
  return {
    props: { allPosts },
  }
}
