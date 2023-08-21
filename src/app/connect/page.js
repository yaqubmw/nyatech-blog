import Footer from "@components/parts/Footer";
import Header from "@components/parts/Header";
import SocialHero from "@components/social/SocialHero";
import DefaultTitleJumbo from "@components/title/DefaultTitleJumbo";

export default function ConnectMe() {
  return (
    <main>
      <Header />
      <DefaultTitleJumbo
        title="Follow Me"
        imageUrl="https://res.cloudinary.com/ymwmedia/image/upload/c_scale,h_1440,q_auto:good/v1650455539/background_b46eca4554.webp"
      />
      <SocialHero />
      <Footer />
    </main>
  );
}
