import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const PATH = 'src/posts'

const postsDirectory = path.join(process.cwd(), PATH)

export async function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData: PostMetaData[] = await Promise.all(
    fileNames
      .filter((name) => name.endsWith('.mdx'))
      .map(async (fileName, index) => {
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data } = matter(fileContents)
        const linkPath = `words/${fileName.replace(/\.mdx$/, '')}`
        return {
          key: index,
          linkPath: linkPath,
          title: data.title,
          date: data.date,
        }
      }),
  )
  allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
  return allPostsData
}

export const getPost = (slug: string) => {
  const fileContents = fs.readFileSync(path.join(`${PATH}/${slug}.mdx`), 'utf8')
  const { data, content } = matter(fileContents)
  return {
    data,
    content,
  }
}

export const getPosts = () => {
  const files = fs.readdirSync(path.join(PATH))
  const allPostsData = files
    .filter((name) => name.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace('.mdx', '')
      const fileContents = fs.readFileSync(
        path.join(`${PATH}/${slug}.mdx`),
        'utf8',
      )
      const { data } = matter(fileContents)
      return {
        slug,
        data,
      }
    })

  return allPostsData
}
