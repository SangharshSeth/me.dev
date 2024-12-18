export default function Writing() {
    const posts = [
        {
            title: "Optimizing PostgreSQL for High-Scale Operations",
            date: "2023-12-18",
            excerpt: "Deep dive into PostgreSQL optimization techniques for handling millions of requests.",
            slug: "postgresql-optimization"
        },
    ]

    return (
        <div>
            <h1>Technical Writing</h1>
            <p>Thoughts on backend engineering, system design, and scalability.</p>

            <div className="posts">
                {posts.map((post) => (
                    <article key={post.slug} className="project">
                        <h2>
                            <a href={`/writing/${post.slug}`}>{post.title}</a>
                        </h2>
                        <div style={{ marginBottom: '0.5rem', fontStyle: 'italic' }}>
                            {post.date}
                        </div>
                        <p>{post.excerpt}</p>
                    </article>
                ))}
            </div>
        </div>
    )
}