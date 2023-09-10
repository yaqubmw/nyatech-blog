import Image from "next/image";
import Link from "next/link";
import propTypes from "prop-types";
import { fetchAuthor } from "@lib/dataAuthor";

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
      <Link href={`/blog/${link}`}>
        <div className="blog-grid-img">
          {imageUrl ? (
            <Image
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              src={imageUrl}
              alt={title}
              width={500}
              height={300}
            />
          ) : (
            <Image
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              src={defaultImageUrl}
              alt="Default Image"
              width={500}
              height={300}
            />
          )}
        </div>
      </Link>
      <Link href={`/blog/${link}`}>
        <div className="blog-grid-section">
          <div className="blog-grid-title">{title}</div>
        </div>
      </Link>
      <Link href={`/blog/${link}`}>
        <div className="blog-grid-section">
          <p className="blog-grid-content">{trimmedContent}</p>
        </div>
      </Link>
      <Link href={`/blog/${link}`}>
        <div className="blog-grid-footer">
          <p className="blog-grid-footer-content">Reactions: {reactions}</p>
          <p className="blog-grid-footer-content">
            Author:{" "}
            <span className="font-medium">
              {authorData.firstName} {authorData.lastName}
            </span>
          </p>
        </div>
      </Link>
    </div>
  );
}

BlogCard.propTypes = {
  link: propTypes.number,
  title: propTypes.string,
  reactions: propTypes.number,
  content: propTypes.string,
  imageUrl: propTypes.string,
  author: propTypes.number,
};

export default BlogCard;
