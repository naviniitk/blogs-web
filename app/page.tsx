import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"

export default function Home() {
  return (
    <div className="prose dark:prose-invert max-w-4xl justify-center mx-auto">
      {allPosts.map((post) => (
        <article className="p-4 rounded-xl my-4 border" key={post._id}>
          <Link href={post.slug}>
            <h2>{post.title}</h2>
          </Link>
          {post.description && <p>{post.description}</p>}
        </article>
      ))}
    </div>
  )
}
