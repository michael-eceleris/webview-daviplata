import React from "react";

import { BiDownload } from "react-icons/bi";

const DownloadButton = () => {
  return (
    <div className='btn--share'>
      <BiDownload fontSize={"22px"} />
      <p>Descargar</p>
    </div>
  );
};

export default DownloadButton;
