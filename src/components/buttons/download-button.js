import React from "react";

import { BiDownload } from "react-icons/bi";

const DownloadButton = ({ onClick }) => {
  return (
    <button className='btn--share' onClick={onClick}>
      <BiDownload fontSize={"22px"} />
      <p>Descargar</p>
    </button>
  );
};

export default DownloadButton;
