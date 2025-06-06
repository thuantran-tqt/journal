import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Life Journal
      </h1>
      <div className="my-12">
        <BlogPosts />
      </div>
    </section>
  )
}
