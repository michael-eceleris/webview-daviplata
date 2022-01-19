import React from "react";
import { Link } from "react-router-dom";

import Container from "../../components/layout/Container";
import PhoneFracture from "../../assets/img/screen-fracture.jpg";
import PhoneSafe from "../../assets/img/all-safe.jpg";
import LogoATS from "../../assets/img/ats-logo.jpg";
import BigBrand from "../../components/brand/big-brand";

const HomePage = () => {
  return (
    <Container>
      <div className='col-span-full bg-white rounded-2xl mt-auto mb-auto'>
        <BigBrand />
        <div className='grid grid-cols-4 col-span-full bg-white rounded-2xl px-2 gap-2 py-2 pb-3 mt-14'>
          <Link
            to='/all-secure'
            className='col-span-2 rounded-2xl card--product--shadow pb-3'
          >
            <div className='h-24'>
              <img
                src={PhoneSafe}
                className='rounded-t-2xl w-full h-full'
                alt='phone-safe'
              />
            </div>
            <div className='h-16 mt-3'>
              <h3 className='text-center'>
                Seguro contra daño y robo de celular
              </h3>
              <p className='text-red-500 text-2 text-center'>Desde</p>
              <p className='text-2 text-center'>$50.000</p>
            </div>
          </Link>
          <Link
            to='/screen-secure'
            className='col-span-2 rounded-2xl card--product--shadow pb-3'
          >
            <div className='h-24'>
              <img
                src={PhoneFracture}
                className='rounded-t-2xl h-full w-full'
                alt='phone-screen-broken'
              />
            </div>
            <div className='h-16 mt-3'>
              <h3 className='text-center'>
                Seguro para la pantalla de su celular
              </h3>
              <p className='text-red-500 text-2 text-center'>Desde</p>
              <p className='text-2 text-center'>$8.000</p>
            </div>
          </Link>
          <div className='col-span-full flex justify-end px-1'>
            <img src={LogoATS} className='w-8' alt='logo-ats' />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
