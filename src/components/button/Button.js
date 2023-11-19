import propTypes from "prop-types";
import Link from "next/link";

const Button = ({ text, link, className, onClick }) => {
  const isExternalLink = link.startsWith("https");

  const handleClick = (event) => {
    if (isExternalLink) {
      window.open(link, "_blank", "noopener noreferrer");
    } else if (onClick) {
      onClick(event);
    }
  };

  return (
    <button className={className} onClick={onClick ? handleClick : null}>
      {isExternalLink ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <span className="mr-2">{text}</span>
          [External]
        </a>
      ) : (
        <Link href={link}>{text}</Link>
      )}
    </button>
  );
};

Button.propTypes = {
  text: propTypes.string.isRequired,
  link: propTypes.string,
  className: propTypes.string,
  onClick: propTypes.func,
};

export default Button;
