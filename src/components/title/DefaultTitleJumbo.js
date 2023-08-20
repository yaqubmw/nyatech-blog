import PropTypes from "prop-types";

const DefaultTitleJumbo = ({ title, imageUrl }) => {
  const defaultImageUrl =
    "https://res.cloudinary.com/ymwmedia/image/upload/v1692507110/dummy-image-post_vu8zlo.webp";

  const postImage = imageUrl ? imageUrl : defaultImageUrl;
  return (
    <div
      className="title-jumbo-bg"
      style={{
        backgroundPosition: "50%",
        backgroundImage: `url('${postImage}')`,
        height: "500px",
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

DefaultTitleJumbo.PropTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
};

export default DefaultTitleJumbo;
