import PropTypes from "prop-types";

const DefaultTitleJumbo = ({ title, imageUrl }) => {
  const defaultImageUrl =
    "https://res.cloudinary.com/ymwmedia/image/upload/v1692507110/dummy-image-post_vu8zlo.webp";

  const postImage = imageUrl ? imageUrl : defaultImageUrl;
  return (
    <div
      className="relative overflow-hidden bg-cover bg-no-repeat"
      style={{
        backgroundPosition: "50%",
        backgroundImage: `url('${postImage}')`,
        height: "500px",
      }}
    >
      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-green-700 bg-opacity-70 bg-fixed">
        <div className="flex h-full items-center justify-center">
          <div className="px-6 text-center text-white md:px-12">
            <h1 className="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
              {title}
            </h1>
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
