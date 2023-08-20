import BlogCard from "@components/card/BlogCard";
import { fetchBlogPosts } from "@api/dataBlog";
import DefaultTitleJumbo from "@components/title/DefaultTitleJumbo";

export default async function BlogPosts() {
  const posts = await fetchBlogPosts();
  return (
    <>
      <div className="main-content bg-slate-700">
        <div className="blog-grid">
          {posts.map((post) => (
            <BlogCard
              key={post.id}
              link={post.id}
              title={post.title}
              date={post.date_published}
              content={post.content}
              imageUrl={null}
              author={post.author}
            />
          ))}
        </div>
      </div>
    </>
  );
}
