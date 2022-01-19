import React from "react";

import LogoAxa from "../../assets/img/logo_axa.png";

const SmallBrand = () => {
  return (
    <div className='absolute top-0 right-0'>
      <div className='card--product--shadow bg-white rounded-bl-2xl p-2.5 rounded-tr-2xl'>
        <img src={LogoAxa} alt='logo_axa' className='w-10' />
      </div>
    </div>
  );
};

export default SmallBrand;
