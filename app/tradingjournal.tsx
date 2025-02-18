import { BlogTradingPosts } from 'app/components/tradingposts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Nhật ký giao dịch tài chính
      </h1>
      <div className="my-12">
        <BlogTradingPosts />
      </div>
    </section>
  )
}
