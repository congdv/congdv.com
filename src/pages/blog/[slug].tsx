import BlogPost from '@/components/BlogPost'
import { getPost, getPosts } from '@/scripts/utils'
import { remark } from 'remark'
import html from 'remark-html'

export default function BlogPage({
  data,
  contentHtml,
}: {
  data: any
  contentHtml: string
}) {
  return (
    <BlogPost meta={data}>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
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
  const processedContent = await remark()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .use(html as any, { sanitize: false })
    .process(post.content)
  const contentHtml = processedContent.toString()
  return {
    props: {
      data: post.data,
      contentHtml,
    },
  }
}
