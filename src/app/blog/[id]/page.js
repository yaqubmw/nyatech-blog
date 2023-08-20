import { fetchBlogPosts } from "@api/dataBlog";
import BlogPostPage from "@components/blog/BlogPostPage";
import Footer from "@components/parts/Footer";
import Header from "@components/parts/Header";

export async function generateStaticParams() {
  const posts = await fetchBlogPosts();

  return posts.map((post) => ({
    params: { id: post.id.toString() },
  }));
}

export default async function BlogPost({ params }) {
  const posts = await fetchBlogPosts();
  const post = posts.find((post) => post.id.toString() === params.id);
  return (
    <main>
      <Header />
      <BlogPostPage
        title={post.title}
        content={post.content}
        date={post.date_published}
        author={post.author}
        imageUrl={null}
      />
      <Footer />
    </main>
  );
}
