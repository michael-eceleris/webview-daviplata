import React from "react";
import { BsShare } from "react-icons/bs";

const ShareButton = ({ onClick }) => {
  return (
    <button className='btn--share' onClick={onClick}>
      <BsShare fontSize={"22px"} />
      <p>Compartir</p>
    </button>
  );
};

export default ShareButton;
