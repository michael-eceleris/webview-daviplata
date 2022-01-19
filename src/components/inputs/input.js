import React from "react";
import { Fragment } from "react";

const Input = ({
  isPrechargue = false,
  register,
  isFilled = false,
  ...props
}) => {
  return (
    <Fragment>
      <input
        {...register}
        {...props}
        className={`${isPrechargue ? "text-input-pre-fill" : ""} ${
          isFilled ? "text-input-fill" : ""
        } text-input-empty text-1 mt-2`}
        placeholder='Ingrese el IMEI de su celular'
      />
    </Fragment>
  );
};

export default Input;
