import React from "react";
import PropTypes from "prop-types";
import "./SlugButton.module.css";

const SlugButton = props => {
  return (
    <button onClick={() => alert(props.slug)}>
      {props.buttonText}
    </button>
  );
};

SlugButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired
};
export default SlugButton;
