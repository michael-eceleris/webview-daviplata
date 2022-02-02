import React from "react";

import LogoAxa from "../../assets/img/logo_axa.png";

const SmallBrand = () => {
  return (
    <div className='absolute top-0 right-0 h-12 w-14'>
      <div className='small--brand--container card--product--shadow bg-white h-full w-full pt-3 pl-2'>
        <img src={LogoAxa} alt='logo_axa' className='w-10' />
      </div>
    </div>
  );
};

export default SmallBrand;
