import DefaultTitleJumbo from "@components/title/DefaultTitleJumbo";
import Image from "next/image";
import PropTypes from "prop-types";

const BlogPostPage = ({ title, date, content, imageUrl, author }) => {
  const defaultImageUrl =
    "https://res.cloudinary.com/ymwmedia/image/upload/v1692507110/dummy-image-post_vu8zlo.webp";

  const postImage = imageUrl ? imageUrl : defaultImageUrl;

  return (
    <>
      <DefaultTitleJumbo title={title} imageUrl={postImage} />
      <div className="main-content">
        <div className="blog-post-body">
          <p className="blog-post-content">{content}</p>
        </div>
        <div className="blog-post-footer">
          <p className="blog-post-footer-content">Published on: {date}</p>
          <p className="blog-post-footer-content">Author: {author}</p>
        </div>
      </div>
    </>
  );
};

BlogPostPage.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  content: PropTypes.string,
  imageUrl: PropTypes.string,
  author: PropTypes.string,
};

export default BlogPostPage;

// width="1115"
// height="514"
