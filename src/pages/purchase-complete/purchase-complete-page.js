import React from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Switch } from "react-if";
import { Case } from "react-if";
import { useForm } from "react-hook-form";

import Container from "../../components/layout/Container";
import Button from "../../components/buttons/button";
import SmallBrand from "../../components/brand/small-brand";
import ShareButton from "../../components/buttons/share-button";
import DownloadButton from "../../components/buttons/download-button";
import DaviplataNotifications from "../../assets/img/daviplata_notifications.jpg";
import { useSecure } from "../../providers/secure/secureProvider";
import { CurrencyValue } from "../../utils/currencyValue";

const PurchaseComplete = () => {
  const { state } = useLocation();
  const { push } = useHistory();
  const { key } = useParams();
  const { insurranceValue } = useSecure();
  const { handleSubmit } = useForm({});

  const submit = (values) => {
    push({ pathname: `/${key}/confirmation-purchase`, state });
  };

  return (
    <Container>
      <div className="relative col-span-full gap-2 mb-auto mt-auto pb-5">
        <div className="bg-white rounded-2xl px-6 md:px-8 lg:px-8 py-12">
          <SmallBrand />
          <Switch>
            <Case condition={state.from === "/all-secure"}>
              <h1 className="text-center mb-4">
                Seguro contra daño y robo de su celular
              </h1>
            </Case>
            <Case condition={state.from === "/screen-secure"}>
              <h1 className="text-center mb-4">
                Seguro para la pantalla de su celular
              </h1>
            </Case>
          </Switch>
          <p className="text-3 text-center mb-4">
            ${CurrencyValue(insurranceValue)}
          </p>
          <h2 className="font--gray-dark text-center mb-4">
            ¡Gracias por su compra!
          </h2>
          <p className="text-5 text-center">
            Hemos enviado el certificado del seguro a su correo.
          </p>
          <p className="text-5 text-center mb-5">
            Recuerde que puede consultarlo en la campana de notificaciones de su
            App DaviPlata
          </p>
          <img
            src={DaviplataNotifications}
            alt="daviplata_notifications"
            className="my-5"
          />
          <div className="flex justify-evenly">
            <ShareButton />
            <DownloadButton />
          </div>
        </div>
        <div className="absolute btn--active__out">
          <Button
            onPress={handleSubmit(submit)}
            title={"Aceptar"}
            isActive={true}
          />
        </div>
      </div>
    </Container>
  );
};

export default PurchaseComplete;
