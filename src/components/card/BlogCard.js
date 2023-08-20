import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

const BlogCard = ({ link, title, date, content, imageUrl, author }) => {
  const defaultImageUrl =
    "https://res.cloudinary.com/ymwmedia/image/upload/v1692507111/dummy-image-post-small_jattie.webp";

  const maxContentLength = 60;

  // Trim the content to the maximum length
  const trimmedContent =
    content.length > maxContentLength
      ? content.substring(0, maxContentLength) + "..."
      : content;

  return (
    <div className="blog-grid-container">
      <div className="blog-grid-img">
        {imageUrl ? (
          <Image width="300" height="200" src={imageUrl} alt={title} />
        ) : (
          <Image
            width="300"
            height="200"
            src={defaultImageUrl}
            alt="Default Image"
          />
        )}
      </div>
      <div className="blog-grid-section">
        <Link href={`/blog/${link}`}>
          <div className="blog-grid-title">{title}</div>
        </Link>
      </div>
      <div className="blog-grid-section">
        <p className="blog-grid-content">{trimmedContent}</p>
      </div>
      <div className="blog-grid-footer">
        <p className="blog-grid-footer-content">Published on: {date}</p>
        <p className="blog-grid-footer-content">Author: {author}</p>
      </div>
    </div>
  );
};

BlogCard.PropTypes = {
  link: PropTypes.number,
  title: PropTypes.string,
  date: PropTypes.string,
  content: PropTypes.string,
  imageUrl: PropTypes.string,
  author: PropTypes.string,
};

export default BlogCard;
