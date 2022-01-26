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
        <option hidden selected defaultValue={""}>
          {placeholder}
        </option>
        {options.map((d, index) => (
          <option
            key={`select_${index}`}
            className='font--black'
            value={d.value}
          >
            {d.name}
          </option>
        ))}
      </select>
    </Fragment>
  );
};

export default Select;
