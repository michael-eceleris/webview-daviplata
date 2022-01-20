import React from "react";
import { BsShare } from "react-icons/bs";

const ShareButton = () => {
  return (
    <div className='btn--share'>
      <BsShare fontSize={"22px"} />
      <p>Compartir</p>
    </div>
  );
};

export default ShareButton;
