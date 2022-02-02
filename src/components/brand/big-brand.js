import React from "react";

import LogoAxa from "../../assets/img/logo_axa.png";

const BigBrand = () => {
  return (
    <div className='col-span-full h-16'>
      <div className='big--brand--container card--product--shadow bg-white h-full pl-4 pt-5'>
        <img src={LogoAxa} alt='logo_axa' className='h-9' />
      </div>
    </div>
  );
};

export default BigBrand;
