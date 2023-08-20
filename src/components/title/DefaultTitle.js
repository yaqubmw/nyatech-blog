import PropTypes from "prop-types";

const DefaultTitle = ({ text }) => {
  return (
    <div className="default-title-container">
      <div className="default-title-content">{text}</div>
    </div>
  );
};

DefaultTitle.PropTypes = {
  text: PropTypes.string.isRequired,
};

export default DefaultTitle;
