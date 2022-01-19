import React from "react";
import Joi from "joi";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Switch } from "react-if";
import { Case } from "react-if";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { useQueryClient } from "react-query";

import Container from "../../components/layout/Container";
import Button from "../../components/buttons/button";
import SmallBrand from "../../components/brand/small-brand";
import ErrorMessage from "../../components/messages/error-messages";
import Input from "../../components/inputs/input";
import { useImei } from "../../providers/imei/imeiProvider";

const schema = Joi.object({
  imei: Joi.string()
    .length(15)
    .pattern(/^[0-9]+$/)
    .required()
    .messages({
      "string.empty": "*Este campo es obligatorio.",
      "string.length": "El imei tiene que tener 15 digitos.",
      "string.pattern.base": "Solo se admiten numeros",
    }),
  terms: Joi.boolean().invalid(false).messages({
    "any.invalid":
      "*Tienes que aceptar los terminos y condiciones para continuar.",
  }),
});

const CheckImeiPage = () => {
  const { state } = useLocation();
  const { imei, terms, setImei, setTerms } = useImei();
  const { push } = useHistory();
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(schema),
  });

  const submit = (values) => {
    setImei(values.imei);
    setTerms(values.terms);
    push({
      pathname: "/check-secure",
      state,
    });
  };

  useEffect(() => {
    queryClient.clear();
    setValue("imei", imei);
    setValue("terms", terms);
    //eslint-disable-next-line
  }, []);

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
          <Input
            register={register("imei")}
            type={"number"}
            className={`text-input-empty text-1 mt-2`}
            placeholder='Ingrese el IMEI de su celular'
            isPrechargue={false}
            isFilled={watch("imei") !== ""}
          />
          <ErrorMessage
            message={errors && errors.imei && errors.imei.message}
            widthClass='mt-1'
          />
          <div className='flex mt-7'>
            <div className='w-2/12 flex'>
              <input {...register("terms")} id='checkTerms' type={"checkbox"} />
              <label htmlFor='checkTerms'></label>
            </div>
            <p className='text-2'>
              Acepto los <u className='font-bold'>terminos y condiciones</u> de
              este seguro.
            </p>
          </div>
          <ErrorMessage
            widthClass='mt-1'
            message={errors && errors.terms && errors.terms.message}
          />
        </div>
        <div className='absolute btn--active__out'>
          <Button
            onPress={handleSubmit(submit)}
            title={"Continuar"}
            isActive={true}
            isDisabled={false}
          />
        </div>
      </div>
    </Container>
  );
};

export default CheckImeiPage;
