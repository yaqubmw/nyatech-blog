import DefaultTitleJumbo from "@components/title/DefaultTitleJumbo";
import { fetchAuthor } from "@lib/dataAuthor";
import propTypes from "prop-types";
import Image from "next/image";

async function BlogPostPage({ title, reactions, content, imageUrl, author }) {
  const defaultImageUrl =
    "https://res.cloudinary.com/ymwmedia/image/upload/v1692507110/dummy-image-post_vu8zlo.webp";

  const postImage = imageUrl ? imageUrl : defaultImageUrl;
  
  const authorData = await fetchAuthor({ authorId: author });

  return (
    <>
      <DefaultTitleJumbo title={title} imageUrl={postImage} />
      <div className="blogpost-main-content">
        <div className="blog-post-body">
          <p className="blog-post-content">{content}</p>
        </div>
        <div className="blog-post-footer">
          <p className="blog-post-footer-content">Reactions: {reactions}</p>
          <div className="blog-post-footer-author">
            <div className="flex flex-col md:flex-row items-center justify-start">
              <div className="w-24 h-32 rounded-lg overflow-hidden flex items-center justify-center bg-slate-300">
                <Image
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  width={300}
                  height={400}
                  src={authorData.image}
                />
              </div>
              <div className="flex flex-col justify-evenly mx-4 h-32">
                <p>Author</p>
                <p className="blog-post-footer-bio-name">
                  {authorData.firstName} {authorData.lastName}
                </p>
                <p className="blog-post-footer-bio">{authorData.email}</p>
                <p className="blog-post-footer-bio">{authorData.university}</p>
                <p className="blog-post-footer-bio">{authorData.domain}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

BlogPostPage.propTypes = {
  title: propTypes.string,
  reactions: propTypes.number,
  content: propTypes.string,
  imageUrl: propTypes.string,
  author: propTypes.number,
};

export default BlogPostPage;
