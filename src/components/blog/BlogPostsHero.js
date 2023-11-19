import BlogCard from "@components/card/BlogCard";
import { fetchBlogPostsHero } from "@lib/dataBlog";

export default async function BlogPostsHero() {
  const response = await fetchBlogPostsHero(); // Fetch the data
  const posts = response.posts;

  const content = (
    <div className="main-content">
      <div className="blog-grid">
        {posts.map((post) => {
          return (
            <BlogCard
              key={post.id}
              link={post.id}
              title={post.title}
              reactions={post.reactions}
              content={post.body}
              imageUrl={null}
              author={post.userId}
            />
          );
        })}
      </div>
    </div>
  );

  return content;
}
