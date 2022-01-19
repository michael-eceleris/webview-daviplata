import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Switch } from "react-if";
import { Case } from "react-if";

import Container from "../../components/layout/Container";
import Button from "../../components/buttons/button";
import SmallBrand from "../../components/brand/small-brand";

const CheckImeiPage = () => {
  const { state } = useLocation();
  return (
    <Container>
      <div className='relative col-span-full gap-2 mb-auto mt-auto pb-5'>
        <div className='bg-white rounded-2xl px-8 py-12'>
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
          />
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
          <Link to={{ pathname: "/check-secure", state }}>
            <Button title={"Continuar"} isActive={true} isDisabled={false} />
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default CheckImeiPage;
