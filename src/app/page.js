import BlogPosts from "@components/blog/BlogPosts";
import Hero from "@components/home/Hero";
import Footer from "@components/parts/Footer";
import Header from "@components/parts/Header";
import SocialHero from "@components/social/SocialHero";
import DefaultTitle from "@components/title/DefaultTitle";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <DefaultTitle text="Follow Me" />
      <SocialHero />
      <DefaultTitle text="Blog" />
      <BlogPosts />
      <Footer />
    </main>
  );
}
