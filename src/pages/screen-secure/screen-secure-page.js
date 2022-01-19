import React from "react";
import { Link } from "react-router-dom";

import Container from "../../components/layout/Container";
import LogoATS from "../../assets/img/ats-logo.jpg";
import Button from "../../components/buttons/button";
import SmallBrand from "../../components/brand/small-brand";

const AllSecurePage = () => {
  return (
    <Container>
      <div className='relative col-span-full gap-2 mb-auto mt-auto pb-5'>
        <div className='bg-white rounded-2xl px-8 py-12'>
          <SmallBrand />
          <h1>Seguro para la pantalla de su celular</h1>
          <div className='mt-7'>
            <h2>Descripcion</h2>
            <ul className='list-daviplata ml-5 mt-3'>
              <li className='li-daviplata'>
                <p className='text-1'>
                  El seguro cubre daños accidentales que afecten la pantalla del
                  celular asegurado, en donde es necesario reparar o reemplazar
                  la pantalla y que no correspondan a situaciones excluidas en
                  los terminos y condiciones.
                </p>
              </li>
              <li className='li-daviplata'>
                <p className='text-1'>
                  Una reclamacion durante la vigencia del seguro.
                </p>
              </li>
              <li className='li-daviplata'>
                <p className='text-1'>
                  30% de deducible (valor que deber ser pagado por el usuario)
                </p>
              </li>
              <li className='li-daviplata'>
                <p className='text-1'>Vigencia del seguro: 6 meses</p>
              </li>
            </ul>
          </div>
          <div className='mt-4'>
            <h3>Soporte</h3>
            <img src={LogoATS} className='w-12' alt='logo-ats' />
            <p className='text-2'>
              Si quiere soporte o ampliar informacion contacteno a
              soporte@aliado.co o a la linea celular o whatsapp 3001234566.
            </p>
          </div>
        </div>
        <div className='absolute btn--active__out'>
          <Link
            to={{ pathname: "/check-imei", state: { from: "/screen-secure" } }}
          >
            <Button title={"Continuar"} isActive={true} />
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default AllSecurePage;
