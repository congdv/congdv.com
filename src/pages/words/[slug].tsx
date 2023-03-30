import BlogPost from '@/components/BlogPost'
import { getPost, getPosts } from '@/scripts/utils'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

export default function BlogPage({
  data,
  content,
}: {
  data: any
  content: any
}) {
  return (
    <BlogPost meta={data}>
      <MDXRemote {...content} />
    </BlogPost>
  )
}

export const getStaticPaths = async () => {
  const posts = await getPosts()
  const paths = posts.map((post) => ({ params: { slug: post.slug } }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }: { params: any }) => {
  const post = await getPost(params.slug)
  const mdxSource = await serialize(post.content)
  return {
    props: {
      data: post.data,
      content: mdxSource,
    },
  }
}
