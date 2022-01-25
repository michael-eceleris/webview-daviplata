import React from "react";
import { Fragment } from "react";

const Select = ({
  options = [],
  withClass = "",
  placeholder = "",
  isFilled = false,
  register,
  ...props
}) => {
  return (
    <Fragment>
      <select
        {...register}
        {...props}
        className={`${withClass} ${
          isFilled ? "text-input-fill" : ""
        } text-input-empty text-1 `}
        placeholder={placeholder}
      >
        <option hidden selected>
          {placeholder}
        </option>
        {options.map((d) => (
          <option className="font--black" value={d.value}>
            {" "}
            {d.name}{" "}
          </option>
        ))}
      </select>
    </Fragment>
  );
};

export default Select;
