import propTypes from "prop-types";

const DefaultTitle = ({ text }) => {
  return (
    <div className="default-title-container">
      <div className="default-title-content">{text}</div>
    </div>
  );
};

DefaultTitle.propTypes = {
  text: propTypes.string.isRequired,
};

export default DefaultTitle;
