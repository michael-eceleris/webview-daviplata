import React from "react";

import LogoAxa from "../../assets/img/logo_axa.png";

const BigBrand = () => {
  return (
    <div className='col-span-full h-5'>
      <div className='card--product--shadow bg-white rounded-2xl pb-1  pl-4 pt-5'>
        <img src={LogoAxa} alt='logo_axa' className='h-11' />
      </div>
    </div>
  );
};

export default BigBrand;
