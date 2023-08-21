import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import { fetchAuthor } from "../../../lib/dataAuthor";

async function BlogCard({ link, title, reactions, content, imageUrl, author }) {
  const defaultImageUrl =
    "https://res.cloudinary.com/ymwmedia/image/upload/v1692507111/dummy-image-post-small_jattie.webp";

  const maxContentLength = 60;
  const trimmedContent =
    content.length > maxContentLength
      ? content.substring(0, maxContentLength) + "..."
      : content;

  const authorData = await fetchAuthor({ authorId: author });
  return (
    <div className="blog-grid-container">
      <div className="blog-grid-img">
        {imageUrl ? (
          <Image
            width="800"
            height="600"
            layout="responsive"
            src={imageUrl}
            alt={title}
          />
        ) : (
          <Image
            width="800"
            height="600"
            layout="responsive"
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
        <p className="blog-grid-footer-content">Reactions: {reactions}</p>
        <p className="blog-grid-footer-content">
          Author:{" "}
          <span className="font-medium">
            {authorData.firstName} {authorData.lastName}
          </span>
        </p>
      </div>
    </div>
  );
}

BlogCard.PropTypes = {
  link: PropTypes.number,
  title: PropTypes.string,
  reactions: PropTypes.string,
  content: PropTypes.string,
  imageUrl: PropTypes.string,
  author: PropTypes.string,
};

export default BlogCard;
