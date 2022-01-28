import React from "react";
import { Fragment } from "react";
import { FaTimes } from "react-icons/all";
import { Switch } from "react-if";
import { Case } from "react-if";

const ErrorComponent = ({ code, message }) => {
  return (
    <Fragment>
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
      <Switch>
        <Case condition={code === 400}>
          <p className='text-1'>{message}</p>
        </Case>
        <Case condition={code === 401}>
          <p className='text-1'>No tienes acceso para este sitio.</p>
        </Case>
        <Case condition={code === 500}>
          <p className='text-1'>
            Ocurrio un error, por favor comunicate con atencion al cliente para
            mas informacion.
          </p>
        </Case>
      </Switch>
    </Fragment>
  );
};

export default ErrorComponent;
