import React from "react";
import { Fragment } from "react";

const ErrorMessage = ({ message = "", widthClass = "" }) => {
  return (
    <Fragment>
      <p className={`text-2 text-red-500 ${widthClass}`}>{message}</p>
    </Fragment>
  );
};

export default ErrorMessage;
