import PostPreview from '../components/post-preview'

export default function MoreStories({ posts, author }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        Mais notas
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.createdAt}
            author={author}
            slug={post.id}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
