import propTypes from "prop-types";

const DefaultTitleJumbo = ({ title, imageUrl }) => {
  const defaultImageUrl =
    "https://res.cloudinary.com/ymwmedia/image/upload/v1692507110/dummy-image-post_vu8zlo.webp";

  const postImage = imageUrl ? imageUrl : defaultImageUrl;
  return (
    <div
      className="title-jumbo-bg"
      style={{
        backgroundImage: `url('${postImage}')`,
      }}
    >
      <div className="title-jumbo-shade">
        <div className="title-jumbo-flex">
          <div className="title-jumbo-format">
            <h1 className="title-jumbo-text">{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

DefaultTitleJumbo.propTypes = {
  title: propTypes.string.isRequired,
  imageUrl: propTypes.string,
};

export default DefaultTitleJumbo;
