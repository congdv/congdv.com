import Link from 'next/link'

export default function BlogPost({
  children,
  meta,
}: {
  children: any
  meta: any
}) {
  return (
    <main className="container-center my-10 min-h-full flex-1">
      <p>
        <span className="arrow pull-back text-sm">←</span>{' '}
        <Link className="text-sm hover:underline" href="/words">
          All posts
        </Link>
      </p>
      <div className="font-bold mt-5"># {meta.title}</div>
      <div className="font-light text-sm">{meta.date}</div>
      <article className="mt-8 prose">{children}</article>
    </main>
  )
}
