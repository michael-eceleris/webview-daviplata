import React from "react";

const Button = ({
  title,
  onPress,
  isActive = false,
  withClass = "",
  isDisabled = false,
}) => {
  return (
    <button
      className={`btn ${
        isActive ? "btn--active" : "btn--inactive"
      } ${withClass}`}
      type='button'
      onClick={onPress}
      disabled={isDisabled}
    >
      {title}
    </button>
  );
};

export default Button;
