import React from "react";
import { Fragment } from "react";

const Input = ({
  isPrechargue = false,
  register,
  isFilled = false,
  placeholder = "",
  withClass = "",
  ...props
}) => {
  return (
    <Fragment>
      <input
        {...register}
        {...props}
        className={` ${withClass} ${
          isPrechargue ? "text-input-pre-fill" : ""
        } ${isFilled ? "text-input-fill" : ""} text-input-empty text-1 `}
        placeholder={placeholder}
      />
    </Fragment>
  );
};

export default Input;
