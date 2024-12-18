import fs from 'fs'
import path from 'path'
import { MDXRemote } from 'next-mdx-remote/rsc'

type Params = Promise<{ slug: string[] }>;

export async function generateStaticParams() {
    const files = fs.readdirSync(path.join(process.cwd(), 'app/writing/posts'))
    return files.map(filename => ({
        slug: filename.replace('.mdx', '')
    }))
}

export default async function BlogPost({ params }: { params: Params }) {
    const { slug } =  await params
    const filePath = path.join(process.cwd(), 'app/writing/posts', `${slug}.mdx`)
    const fileContent = fs.readFileSync(filePath, 'utf8')

    return (
        <article className="prose lg:prose-xl">
            <MDXRemote source={fileContent} />
        </article>
    )
}

