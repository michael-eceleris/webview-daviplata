import React from "react";
import Joi from "joi";
import _ from "lodash";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Switch } from "react-if";
import { Case } from "react-if";
import { When } from "react-if";
import { Unless } from "react-if";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

import Container from "../../components/layout/Container";
import Button from "../../components/buttons/button";
import SmallBrand from "../../components/brand/small-brand";
import Input from "../../components/inputs/input";
import Select from "../../components/inputs/select";
import SkeletonCard from "../../components/skeleton/card";
import ErrorComponent from "../../components/error/Error";
import ErrorMessage from "../../components/messages/error-messages";
import { useImei } from "../../providers/imei/imeiProvider";
import { useSecure } from "../../providers/secure/secureProvider";
import { useUser } from "../../providers/user/userProvider";
import { useCreatePolicy } from "../../services/secure/useSecure";
import { CurrencyValue } from "../../utils/currencyValue";

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
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.empty": "*Este campo es obligatorio.",
      "any.required": "*Este campo es obligatorio.",
      "string.email": "Este campo debe ser un correo valido.",
    }),
  name: Joi.string().required().messages({
    "string.empty": "*Este campo es obligatorio.",
    "any.required": "*Este campo es obligatorio.",
  }),
  lastName: Joi.string().required().messages({
    "string.empty": "*Este campo es obligatorio.",
    "any.required": "*Este campo es obligatorio.",
  }),
  genderId: Joi.string()
    .valid("MASCULINO", "FEMENINO", "NO BINARIO")
    .required()
    .messages({
      "string.empty": "*Este campo es obligatorio.",
      "any.only": "*Este campo es obligatorio.",
    }),
});

const DetailsPurchase = () => {
  const { state } = useLocation();
  const { imei } = useImei();
  const { dataSecure, insurranceValue } = useSecure();
  const [error, setError] = useState(null);
  const { push } = useHistory();
  const { key } = useParams();
  const { user } = useUser();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(schema),
    defaultValues: {
      imei,
      email: user.email,
      name: user.name,
      lastName: "",
    },
  });
  const { mutateAsync: create, isLoading } = useCreatePolicy();

  const submit = (values) => {
    const data = {
      client: {
        firstName: values.name,
        lastName: values.lastName,
        email: values.email,
        genderId: values.genderId,
      },
      planId: Number(dataSecure.policy.id),
      device: {
        imei,
      },
      sponsorId: "DAVIPLATA",
      priceOptionId: Number(dataSecure.policy.pricingOptions[0].id),
      insurranceValue,
    };
    create(data)
      .then((res) => {
        if (res) {
          push({
            pathname: `/${key}/complete-purchase/${res.data.policy.id}`,
            state,
          });
        }
      })
      .catch((error) => {
        setError({
          codeError: error.response.data.error.code,
          mesagge: error.response.data.error.message,
        });
      });
  };

  const close = () => {
    push(`/${key}`);
  };

  return (
    <Container>
      <div className='relative col-span-full gap-2 mb-auto mt-auto pb-5'>
        <When condition={!isLoading}>
          <div className='bg-white rounded-2xl px-8 md:px-8 lg:px-8 py-12'>
            <SmallBrand />
            <Switch>
              <Case condition={!_.isNull(error)}>
                <ErrorComponent
                  code={error?.codeError}
                  message={error?.mesagge}
                />
              </Case>
              <Case condition={_.isNull(error)}>
                <h1>Detalles de compra</h1>
                <div className='rounded-2xl w-full py-3.5 card--product--shadow px-4 mt-5 mb-4'>
                  <div className='flex justify-between pb-3.5 card--product--division '>
                    <div className='text-left w-full'>
                      <p className='text-2 font--gray-dark'>
                        Seguro para su celular
                      </p>
                      <Switch>
                        <Case condition={state.from === "/all-secure"}>
                          <h4>Seguro contra daño y robo de su celular</h4>
                        </Case>
                        <Case condition={state.from === "/screen-secure"}>
                          <h4>Seguro para la pantalla de su celular</h4>
                        </Case>
                      </Switch>
                    </div>
                  </div>
                  <div className='flex justify-between pb-3.5 card--product--division '>
                    <div className='text-left w-3/6'>
                      <h4>Valor a pagar</h4>
                      <p className='text-2 font--gray-dark'>Medio de pago</p>
                    </div>
                    <div className='text-right w-3/6'>
                      <h4>${CurrencyValue(insurranceValue)}</h4>
                      <p className='text-2 font--gray-dark mr-3.5'>DaviPlata</p>
                    </div>
                  </div>
                  <div className='flex justify-between pt-4'>
                    <div className='text-left w-3/6'>
                      <h4>Vigencia del seguro</h4>
                    </div>
                    <div className='text-right w-3/6'>
                      <h4>6 meses</h4>
                    </div>
                  </div>
                </div>

                <p className='text-2 font--black'>
                  Enviaremos el certificado a su correo. Por favor verifique la
                  información
                </p>
                <h2 className='mt-3.5 -mb-1'>Nombre</h2>
                <Input
                  register={register("name")}
                  type={"text"}
                  withClass={`text-input-empty text-1 mt-1`}
                  placeholder='Nombre'
                  isPrechargue={false}
                  isFilled={true}
                />
                <ErrorMessage
                  widthClass='mt-1'
                  message={errors && errors.name && errors.name.message}
                />
                <h2 className='mt-3.5 -mb-1'>Apellido</h2>
                <Input
                  register={register("lastName")}
                  type={"text"}
                  withClass={`text-input-empty text-1 mt-1`}
                  placeholder='Apellido'
                  isPrechargue={false}
                  isFilled={true}
                />
                <ErrorMessage
                  widthClass='mt-1'
                  message={errors && errors.lastName && errors.lastName.message}
                />
                <h2 className='mt-3.5 -mb-1'>Correo</h2>
                <Input
                  register={register("email")}
                  type={"text"}
                  withClass={`text-input-empty text-1 mt-1`}
                  placeholder='correo@mail.com'
                  isPrechargue={false}
                  isFilled={true}
                />
                <ErrorMessage
                  widthClass='mt-1'
                  message={errors && errors.email && errors.email.message}
                />
                <h2 className='mt-3.5 -mb-1'>Sexo</h2>
                <Select
                  register={register("genderId")}
                  withClass='w-full'
                  options={[
                    { value: "MASCULINO", name: "Masculino" },
                    { value: "FEMENINO", name: "Femenino" },
                    { value: "NO BINARIO", name: "No Binario" },
                  ]}
                  isFilled={
                    watch("genderId") !== "Sexo" &&
                    watch("genderId") !== undefined
                  }
                  placeholder='Sexo'
                />
                <ErrorMessage
                  widthClass='mt-1'
                  message={errors && errors.genderId && errors.genderId.message}
                />
              </Case>
            </Switch>
          </div>
          <div className='absolute btn--active__out'>
            <Switch>
              <Case condition={!_.isNull(error)}>
                <Button
                  onPress={close}
                  title={"Aceptar"}
                  isActive={true}
                  isDisabled={false}
                />
              </Case>
              <Case condition={_.isNull(error)}>
                <Button
                  onPress={handleSubmit(submit)}
                  title={"Comprar"}
                  isActive={true}
                />
              </Case>
            </Switch>
          </div>
        </When>
        <Unless condition={!isLoading}>
          <SkeletonCard withClass='h-96' />
        </Unless>
      </div>
    </Container>
  );
};

export default DetailsPurchase;
