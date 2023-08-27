import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";

export default function Home() {
  return (
    <div className="prose dark:prose-invert max-w-4xl justify-center mx-auto">
      {allPosts.map((post) => (
        <Link key={post._id} href={post.slug}>
          <article className="p-4 rounded-xl my-4 border" >
            <h2>{post.title}</h2>
            {post.description && <p>{post.description}</p>}
          </article>
        </Link>
      ))}
    </div>
  );
}
