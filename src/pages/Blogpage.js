import BlogPosts from "@components/blog/BlogPosts";
import Footer from "@components/parts/Footer";
import Header from "@components/parts/Header";
import DefaultTitleJumbo from "@components/title/DefaultTitleJumbo";

export default function Blogpage() {
  return (
    <main>
      <Header />
      <DefaultTitleJumbo
        title="Blog"
        imageUrl="https://res.cloudinary.com/ymwmedia/image/upload/c_scale,h_1440/v1650288373/vecteezy_hand_holding_a_small_tree_on_blurred_green_background_1268947_f2316fcc1e.webp"
      />
      <BlogPosts />
      <Footer />
    </main>
  );
}
