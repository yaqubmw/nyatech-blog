import BlogCard from "@components/card/BlogCard";
import { fetchBlogPosts } from "@lib/dataBlog";

export default async function BlogPosts() {
  const response = await fetchBlogPosts(); // Fetch the data
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
