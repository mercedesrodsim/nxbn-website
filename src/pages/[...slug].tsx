import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
 
interface Props {
  mdxSource: MDXRemoteSerializeResult
}

export async function getStaticProps() {
  // MDX text - can be from a local file, database, CMS, fetch, anywhere...
  // const res = await fetch('https:...')
  // const mdxText = await res.text()
  // const mdxSource = await serialize(mdxText)
  // return { props: { mdxSource } }
  const mdxSource = await serialize('Hello, *world*!')
  console.log()
  return { props: { mdxSource}}
}

const ContentPage = ({ mdxSource }: Props) =>  {
  return <MDXRemote {...mdxSource} />
}

export default ContentPage