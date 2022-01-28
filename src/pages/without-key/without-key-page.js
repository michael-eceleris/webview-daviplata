import React from "react";
import { FaTimes } from "react-icons/all";

import Container from "../../components/layout/Container";
import SmallBrand from "../../components/brand/small-brand";

const WithoutKeyPage = () => {
  return (
    <Container>
      <div className='relative col-span-full bg-white rounded-2xl mt-auto mb-auto pt-8 pb-4 px-4 h-2/3'>
        <div className='flex h-full justify-center items-center flex-col'>
          <SmallBrand />
          <div className='mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 '>
            <FaTimes
              size={"28px"}
              style={{
                color: "rgba(239, 68, 68, 1)",
                borderColor: "rgba(239, 68, 68, 1)",
                stroke: "rgba(239, 68, 68, 1)",
              }}
            />
          </div>
          <h1 className='text-center mb-4'>Lo sentimos</h1>
          <p className='text-1'>
            No tienes acceso para acceder a este sitio, por favor comunicate con
            atencion al cliente para mas informacion.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default WithoutKeyPage;
