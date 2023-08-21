import { fetchBlogPosts } from "@lib/dataBlog";
import BlogPostPage from "@components/blog/BlogPostPage";
import Footer from "@components/parts/Footer";
import Header from "@components/parts/Header";

export async function generateStaticParams() {
  const response = await fetchBlogPosts();
  const posts = response.posts;

  return posts.map((post) => ({
    params: { id: post.id.toString() },
  }));
}

export default async function BlogPost({ params }) {
  const response = await fetchBlogPosts();
  const posts = response.posts;
  const post = posts.find((post) => post.id.toString() === params.id);
  return (
    <main>
      <Header />
      <BlogPostPage
        title={post.title}
        content={post.body}
        reactions={post.reactions}
        author={post.userId}
        imageUrl={null}
      />
      <Footer />
    </main>
  );
}
