import React from "react";
import { useLocation } from "react-router-dom";
import { Switch } from "react-if";
import { Case } from "react-if";

import Container from "../../components/layout/Container";
import Button from "../../components/buttons/button";
import SmallBrand from "../../components/brand/small-brand";

const CheckSecurePage = () => {
  const { state } = useLocation();
  return (
    <Container>
      <div className='relative col-span-full gap-2 mb-auto mt-auto pb-5'>
        <div className='bg-white rounded-2xl px-8 md:px-8 lg:px-8 py-12'>
          <SmallBrand />
          <Switch>
            <Case condition={state.from === "/all-secure"}>
              <h1>Seguro contra daño y robo de su celular</h1>
            </Case>
            <Case condition={state.from === "/screen-secure"}>
              <h1>Seguro para la pantalla de su celular</h1>
            </Case>
          </Switch>
          <div className='mt-4'>
            <p className='text-1'>
              Para consultar el IMEI de su celular marque en su teclado *#06#.
            </p>
          </div>
          <h2 className='mt-4'>IMEI</h2>
          <input
            type={"text"}
            className={`text-input-empty text-1 mt-2`}
            placeholder='Ingrese el IMEI de su celular'
            value='12312312312'
          />
          <div className='rounded-2xl w-full py-3.5 card--product--shadow px-4 mt-5 mb-6'>
            <div className='flex justify-between pb-3.5 card--product--division'>
              <div className='text-left w-3/6'>
                <p className='text-2 font--gray-dark'>Marca de su celular</p>
                <h4>Huawei</h4>
              </div>
              <div className='text-right w-3/6'>
                <p className='text-2 font--gray-dark'>Referencia</p>
                <h4>P30 Lite (256 GB)</h4>
              </div>
            </div>
            <div className='flex justify-between pt-4'>
              <div className='text-left w-3/6'>
                <p className='text-2 font--gray-dark'>Valor del seguro</p>
                <h4>$200.000</h4>
              </div>
              <div className='text-right w-3/6'>
                <p className='text-2 font--gray-dark'>Valor asegurado</p>
                <h4>$1'500.000</h4>
                <p className='text-2 font--gray-dark'>
                  Sujeto a cambios de precio del celular en el mercado
                </p>
              </div>
            </div>
          </div>
          <div className='flex mt-7'>
            <div className='w-2/12 flex'>
              <input id='checkTerms' type={"checkbox"} />
              <label htmlFor='checkTerms'></label>
            </div>
            <p className='text-2'>
              Acepto los <u className='font-bold'>terminos y condiciones</u> de
              este seguro.
            </p>
          </div>
        </div>
        <div className='absolute btn--active__out'>
          <Button title={"Continuar"} isActive={false} />
        </div>
      </div>
    </Container>
  );
};

export default CheckSecurePage;
