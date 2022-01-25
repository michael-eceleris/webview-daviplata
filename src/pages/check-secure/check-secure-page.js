import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Joi from "joi";
import { Link } from "react-router-dom";
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
import SkeletonCard from "../../components/skeleton/card";
import ErrorMessage from "../../components/messages/error-messages";
import { useImei } from "../../providers/imei/imeiProvider";
import { useSecure } from "../../providers/secure/secureProvider";
import { useCheckImei } from "../../services/imei/useCheckImei";
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
  terms: Joi.boolean().invalid(false).messages({
    "any.invalid":
      "*Tienes que aceptar los terminos y condiciones para continuar.",
  }),
});

const CheckSecurePage = () => {
  const { state } = useLocation();
  const { imei, terms } = useImei();
  const { key } = useParams();
  const { setInsurranceValue, setDataSecure } = useSecure();
  const [data, setData] = useState({
    key: "",
    policy: {
      pricingOptions: [
        {
          paymentAmount: 0,
        },
      ],
    },
    brand: "",
    insuredValue: 0,
  });
  const { push } = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(schema),
    defaultValues: {
      imei,
      terms,
    },
  });
  const { mutateAsync: checkImei, isLoading } = useCheckImei();

  const submit = () => {
    push({
      pathname: `/${key}/details-purchase`,
      state,
    });
  };

  useEffect(() => {
    checkImei({
      id: state.id,
      body: {
        imei,
        sponsor: "DAVIPLATA",
      },
    })
      .then((res) => {
        if (res) {
          setDataSecure(res.data);
          setData(res.data);
          setInsurranceValue(
            res.data?.policy?.pricingOptions[0]?.paymentAmount
          );
        }
      })
      .catch(() => {
        push("/");
      });
    /* eslint-disable-next-line */
  }, []);
  return (
    <Container>
      <div className="relative col-span-full gap-2 mb-auto mt-auto pb-5">
        <div className="bg-white rounded-2xl px-8 md:px-8 lg:px-8 py-12">
          <SmallBrand />
          <Switch>
            <Case condition={state.from === "/all-secure"}>
              <h1>Seguro contra daño y robo de su celular</h1>
            </Case>
            <Case condition={state.from === "/screen-secure"}>
              <h1>Seguro para la pantalla de su celular</h1>
            </Case>
          </Switch>
          <div className="mt-4">
            <p className="text-1">
              Para consultar el IMEI de su celular marque en su teclado *#06#.
            </p>
          </div>
          <h2 className="mt-4">IMEI</h2>
          <Input
            register={register("imei")}
            type={"number"}
            className={`text-input-empty text-1 mt-2`}
            isPrechargue={false}
            isFilled={true}
            readOnly
            placeholder="Ingrese el IMEI de su celular"
          />
          <When condition={!isLoading}>
            <div className="rounded-2xl w-full py-3.5 card--product--shadow px-4 mt-5 mb-6">
              <div className="flex justify-between pb-3.5 card--product--division ">
                <div className="text-left w-3/6">
                  <p className="text-2 font--gray-dark">Marca de su celular</p>
                  <h4>{data?.brand}</h4>
                </div>
                <div className="text-right w-3/6">
                  <p className="text-2 font--gray-dark">Referencia</p>
                  <h4>{data?.key}</h4>
                </div>
              </div>
              <div className="flex justify-between pt-4">
                <div className="text-left w-3/6">
                  <p className="text-2 font--gray-dark">Valor del seguro</p>
                  <h4>
                    $
                    {CurrencyValue(
                      data?.policy?.pricingOptions[0]?.paymentAmount
                    )}
                  </h4>
                </div>
                <div className="text-right w-3/6">
                  <p className="text-2 font--gray-dark">Valor asegurado</p>
                  <h4>${CurrencyValue(data?.insuredValue)}</h4>
                  <p className="text-2 font--gray-dark">
                    Sujeto a cambios de precio del celular en el mercado
                  </p>
                </div>
              </div>
            </div>
          </When>
          <Unless condition={!isLoading}>
            <SkeletonCard />
          </Unless>
          <div className="flex mt-7">
            <div className="w-2/12 flex">
              <input {...register("terms")} id="checkTerms" type={"checkbox"} />
              <label htmlFor="checkTerms"></label>
            </div>
            <Switch>
              <Case condition={state.from === "/all-secure"}>
                <p className="text-2">
                  Acepto los
                  <Link to="/all-secure-terms-condition">
                    <u className="font-bold mx-1">terminos y condiciones</u>
                  </Link>
                  de este seguro.
                </p>
              </Case>
              <Case condition={state.from === "/screen-secure"}>
                <p className="text-2">
                  Acepto los
                  <Link to="/screen-secure-terms-condition">
                    <u className="font-bold mx-1">terminos y condiciones</u>
                  </Link>
                  de este seguro.
                </p>
              </Case>
            </Switch>
          </div>
          <ErrorMessage
            widthClass="mt-1"
            message={errors && errors.terms && errors.terms.message}
          />
        </div>
        <div className="absolute btn--active__out">
          <Button
            onPress={handleSubmit(submit)}
            title={"Continuar"}
            isActive={!isLoading}
            isDisabled={isLoading}
          />
        </div>
      </div>
    </Container>
  );
};

export default CheckSecurePage;
