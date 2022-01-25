import React from "react";
import Joi from "joi";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
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
import SkeletonCard from "../../components/skeleton/card";
import ErrorMessage from "../../components/messages/error-messages";
import { useImei } from "../../providers/imei/imeiProvider";
import { useSecure } from "../../providers/secure/secureProvider";
import { useCreateInsurrance } from "../../services/secure/useSecure";
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
  line: Joi.string()
    .pattern(/^[0-9]+$/)
    .required()
    .messages({
      "string.empty": "*Este campo es obligatorio.",
      "string.pattern.base": "Solo se admiten numeros",
    }),
  nit: Joi.string()
    .pattern(/^[0-9]+$/)
    .required()
    .messages({
      "string.empty": "*Este campo es obligatorio.",
      "string.pattern.base": "Solo se admiten numeros",
    }),
});

const DetailsPurchase = () => {
  const { state } = useLocation();
  const { imei } = useImei();
  const { dataSecure, insurranceValue } = useSecure();
  const { push } = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(schema),
    defaultValues: {
      imei,
      email: "",
      name: "",
      lastName: "",
      line: "",
      nit: "",
    },
  });
  const { mutateAsync: create, isLoading } = useCreateInsurrance();

  const submit = (values) => {
    console.log("values", values, dataSecure);
    /* create(values).then((res) => {
      if (res.status === 200) {
        push({
          pathname: "/complete-purchase",
          state,
        });
      } else {
      }
    }); */
  };

  return (
    <Container>
      <div className="relative col-span-full gap-2 mb-auto mt-auto pb-5">
        <When condition={!isLoading}>
          <div className="bg-white rounded-2xl px-8 md:px-8 lg:px-8 py-12">
            <SmallBrand />
            <h1>Detalles de compra</h1>
            <div className="rounded-2xl w-full py-3.5 card--product--shadow px-4 mt-5 mb-4">
              <div className="flex justify-between pb-3.5 card--product--division ">
                <div className="text-left w-full">
                  <p className="text-2 font--gray-dark">
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
              <div className="flex justify-between pb-3.5 card--product--division ">
                <div className="text-left w-3/6">
                  <h4>Valor a pagar</h4>
                  <p className="text-2 font--gray-dark">Medio de pago</p>
                </div>
                <div className="text-right w-3/6">
                  <h4>${CurrencyValue(insurranceValue)}</h4>
                  <p className="text-2 font--gray-dark">Daviplata</p>
                </div>
              </div>
              <div className="flex justify-between pt-4">
                <div className="text-left w-3/6">
                  <h4>Vigencia del seguro</h4>
                </div>
                <div className="text-right w-3/6">
                  <h4>6 meses</h4>
                </div>
              </div>
            </div>
            <p className="text-2 font--black">
              Enviaremos el certificado a su correo. Por favor verifique la
              siguiente información.
            </p>
            <h2 className="mt-3.5 -mb-1">Nombre</h2>
            <Input
              register={register("name")}
              type={"text"}
              withClass={`text-input-empty text-1 mt-1`}
              placeholder="nombre"
              isPrechargue={false}
              isFilled={true}
            />
            <ErrorMessage
              widthClass="mt-1"
              message={errors && errors.name && errors.name.message}
            />
            <h2 className="mt-3.5 -mb-1">Apellido</h2>
            <Input
              register={register("lastName")}
              type={"text"}
              withClass={`text-input-empty text-1 mt-1`}
              placeholder="apellido"
              isPrechargue={false}
              isFilled={true}
            />
            <ErrorMessage
              widthClass="mt-1"
              message={errors && errors.lastName && errors.lastName.message}
            />
            <h2 className="mt-3.5 -mb-1">Correo</h2>
            <Input
              register={register("email")}
              type={"text"}
              withClass={`text-input-empty text-1 mt-1`}
              placeholder="correo@mail.com"
              isPrechargue={false}
              isFilled={true}
            />
            <ErrorMessage
              widthClass="mt-1"
              message={errors && errors.email && errors.email.message}
            />
            <h2 className="mt-3.5 -mb-1">Celular</h2>
            <Input
              register={register("line")}
              type={"text"}
              withClass={`text-input-empty text-1 mt-1`}
              placeholder="Celular"
              isPrechargue={false}
              isFilled={true}
            />
            <ErrorMessage
              widthClass="mt-1"
              message={errors && errors.line && errors.line.message}
            />
            <h2 className="mt-3.5 -mb-1">Identificacion</h2>
            <Input
              register={register("nit")}
              type={"text"}
              withClass={`text-input-empty text-1 mt-1`}
              placeholder="Identificacion"
              isPrechargue={false}
              isFilled={true}
            />
            <ErrorMessage
              widthClass="mt-1"
              message={errors && errors.nit && errors.nit.message}
            />
          </div>
          <div className="absolute btn--active__out">
            <Button
              onPress={handleSubmit(submit)}
              title={"Comprar"}
              isActive={true}
            />
          </div>
        </When>
        <Unless condition={!isLoading}>
          <SkeletonCard withClass="h-96" />
        </Unless>
      </div>
    </Container>
  );
};

export default DetailsPurchase;
