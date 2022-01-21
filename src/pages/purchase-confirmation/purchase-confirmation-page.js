import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineCheckCircle } from "react-icons/ai";

import Container from "../../components/layout/Container";
import Button from "../../components/buttons/button";
import { useSecure } from "../../providers/secure/secureProvider";
import { CurrencyValue } from "../../utils/currencyValue";

const PurchaseConfirmationPage = () => {
  const { insurranceValue } = useSecure();
  return (
    <Container>
      <div className='relative col-span-full gap-2 mb-auto mt-auto pb-5'>
        <div className='bg-white rounded-2xl px-8 md:px-8 lg:px-8 py-8'>
          <div className='flex items-center justify-evenly font--green'>
            <AiOutlineCheckCircle fontSize={"32px"} />
            <h4 className='text-center'>Transacción exitosa</h4>
          </div>
          <div className=' pb-3.5 card--product--division mt-7'>
            <p className='text-2 font--gray-dark'>Aliado</p>
            <h2>ATS / Axa Colpatria</h2>
          </div>
          <div className=' pb-3.5 card--product--division mt-4'>
            <p className='text-2 font--gray-dark'>Valor</p>
            <h2>${CurrencyValue(insurranceValue)}</h2>
          </div>
          <div className=' pb-3.5 card--product--division mt-4'>
            <p className='text-2 font--gray-dark'>Aliado</p>
            <h2>ATS / Axa Colpatria</h2>
          </div>
          <div className=' pb-3.5 card--product--division mt-4'>
            <p className='text-2 font--gray-dark'>
              Fecha y hora de la transacción
            </p>
            <h2>ATS / Axa Colpatria</h2>
          </div>
          <div className=' pb-3.5 card--product--division mt-4 '>
            <p className='text-2 font--gray-dark'>Número de autorización</p>
            <h2>12345</h2>
          </div>
        </div>
        <div className='absolute btn--active__out'>
          <Link to='/home-daviplata-app'>
            <Button title={"Finalizar"} isActive={true} />
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default PurchaseConfirmationPage;
