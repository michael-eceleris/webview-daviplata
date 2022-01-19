import React from "react";
import { useHistory } from "react-router-dom";

import Container from "../../components/layout/Container";
import Button from "../../components/buttons/button";

const TermsConditionsAllSecurePage = () => {
  const { goBack } = useHistory();
  return (
    <Container>
      <div className='relative col-span-full gap-2 mb-auto mt-auto pb-5'>
        <div className='bg-white rounded-2xl px-4 md:px-8 lg:px-8 py-6'>
          <h1 className='mb-4'>
            Términos y Condiciones Producto Fractura de Pantalla - Daviplata
          </h1>
          <h2>Términos y Condiciones</h2>
          <p className='text-1 mb-4'>
            Esta dirigido a todos los usuarios que tenga una cuenta en DaviPlata
            y que requierem asegurar su equipo celular usado contra Fractura de
            Pantalla.
          </p>
          <h2>Vigencia</h2>
          <p className='text-1 mb-4'>6 meses</p>
          <h2>Recobro</h2>
          <p className='text-1 mb-4'>
            Una vez aprobada la reclamación, el asegurado debe cancelar un
            deducible equivalente al 35% del valor de la reparación de pantalla.
          </p>
          <h2>Detalle de la Cobertura</h2>
          <p className='text-1 mb-4'>
            El usuario tiene derecho a 1 (una) reclamación por vigencia (6
            meses).
          </p>
          <h2>Términos y Condiciones asistencia de Pantalla</h2>
          <ul className='list-daviplata ml-5 mt-3 mb-4'>
            <li className='li-daviplata'>
              <p className='text-1 mb-2'>
                Aplica para terminales cuyo precio sea menor o igual de
                $6.500.000 IVA no incluido.
              </p>
            </li>
            <li className='li-daviplata'>
              <p className='text-1 mb-2'>
                Para fractura de pantalla, a título de indemnización se
                realizará la reparación o el cambio de la pantalla.
              </p>
            </li>
            <li className='li-daviplata'>
              <p className='text-1 mb-2'>
                No aplica para Netbooks, Plantas, Tablets, Phablets, Módems o
                equipos comprados con fechas anteriores al inicio de la
                promoción.
              </p>
            </li>
            <li className='li-daviplata'>
              <p className='text-1 mb-2'>
                La reparación de la pantalla no cubre: daños en la tarjeta
                principal, módulos de pantalla, carcasas laterales, batería, ni
                daños por humedad en el equipo.
              </p>
            </li>
            <li className='li-daviplata'>
              <p className='text-1 mb-2'>
                La reparación y logística de la cobertura de protección de
                pantalla se realizará con el servicio técnico autorizado por Axa
                Colpatria Seguros S.A.
              </p>
            </li>
            <li className='li-daviplata'>
              <p className='text-1 mb-2'>
                No aplica para equipos comprados en otros países.
              </p>
            </li>
            <li className='li-daviplata'>
              <p className='text-1 mb-2'>
                Si al momento de la reparación del producto este presenta otra
                clase de daños diferentes a la ruptura de la pantalla, este
                valor deberá ser asumido por el usuario.
              </p>
            </li>
          </ul>
          <h2>Condiciones Generales</h2>
          <p className='text-1 mb-4'>
            El Seguro para Equipo de Telefonía Móvil es un seguro respaldado por
            Axa Colpatria Seguros S.A., el cual cubre el evento por fractura de
            pantalla, con vigencias anuales contados a partir de la fecha de
            adquisición de la póliza.
          </p>
          <p className='text-1 mb-4'>
            La renovación es automática e implica el pago de prima
          </p>
          <p className='text-1 mb-4'>
            Estarán excluidos todos aquellos eventos originados, basados o
            atribuibles a:
          </p>
          <p className='text-1 mb-4'>
            Lucro cesante, o pérdidas consecuenciales.
          </p>
          <p className='text-1 mb-4'>
            Daños que sufra el equipo como consecuencia del dolo o la culpa
            grave del usuario o de un tercero autorizado por este.
          </p>
          <p className='text-1 mb-4'>
            Dolo, culpa grave o mala fe del usuario o de sus representantes.
          </p>
          <p className='text-1 mb-4'>
            Motín, conmoción civil o popular,vandalismo y actos mal
            intencionados de terceros.
          </p>
          <p className='text-1 mb-4'>
            Acciones militares, guerra civil o internacional, asonada, motín,
            conmoción civil, huelgas, conflictos colectivos de trabajo o
            suspensión de hecho de labores y consecuencias de las medidas
            adoptadas.
          </p>
          <p className='text-1 mb-4'>Decomiso o embargo del bien asistido.</p>
          <p className='text-1 mb-4'>
            Pérdidas causadas o resultantes de acciones gubernamentales, tales
            como confiscación, incautación o destrucción del bien asistido por
            orden de autoridad gubernamental competente.
          </p>
          <p className='text-1 mb-4'>
            Pérdidas por fraudes o actos deshonestos de terceros, tales como
            clonación y similares.
          </p>
          <p className='text-1 mb-4'>
            Pérdias o daños de elementos considerados accesorios del bien
            asegurado como baterías, audifonos, manos libres, forros y
            cargadores, entre otros.
          </p>
          <p className='text-1 mb-4'>
            Demás exclusiones consignadas en el clausulado general.
          </p>
          <h2>Atención al Cliente</h2>
          <p className='text-1 mb-4'>
            La reclamación del servicio se puede realizar a través de la línea
            01 8000 513 323 o en Bogotá al 4898599 de lunes a viernes de 8 am a
            6 pm y sábado de 8 am a 2 pm, por WhatsApp al +57 1 5142355 o por
            medio del chat habilitado en la siguiente página
            www.aseguratucelular.com.
          </p>
          <h2>Documentación</h2>
          <p className='text-1 mb-4'>
            Para hacer efectivo el servicio el usuario debe radicar los
            siguientes documentos a la aseguradora por medio de la página web
            www.aseguratucelular.com.
          </p>
          <h2>Fractura de Pantalla</h2>
          <ul className='list-daviplata ml-5 mt-3 mb-4'>
            <li className='li-daviplata'>
              <p className='text-1 mb-2'>
                Formato de reclamación debidamente diligenciado por el cliente
                tachaduras o enmendaduras.
              </p>
            </li>
            <li className='li-daviplata'>
              <p className='text-1 mb-2'>
                Copia de la cédula de ciudadanía del cliente ampliado al 150%.
              </p>
            </li>
            <li className='li-daviplata'>
              <p className='text-1 mb-2'>Fractura de compra del equipo.</p>
            </li>
            <li className='li-daviplata'>
              <p className='text-1 mb-2'>
                Para clientes pymes o corporativos se requiere: Certificado de
                cámara de comercio y fotocopia del documentos de identificación
                (ampliado al 150%) del representante legal (persona jurídica).
              </p>
            </li>
            <li className='li-daviplata'>
              <p className='text-1 mb-2'>
                Imagen del estado del equipo (laterales y frontales).
              </p>
            </li>
            <li className='li-daviplata'>
              <p className='text-1 mb-2'>
                Si la unidad enciende imagen del imei desde el equipo (marcar
                *#06#).
              </p>
            </li>
          </ul>
          <p className='text-1 mb-2'>
            En un máximo de 5 días hábiles de radicar la documentación, se
            analizarán los documentos y se indicará el estado de esta, si la
            reclamación es preaprobada, se enviará una solicitud de pago del
            deducible y una orden de cambio de equipo (hurto simple, hurto
            calificado y daño total accidental) o una orden de reparación
            (fractura de pantalla) para que el equipo sea llevado a un punto
            logístico autorizado a nivel nacional para luego ser trasladado al
            taller para su reparación o recogido en la dirección indicada por el
            cliente.
          </p>
        </div>
        <div className='absolute btn--active__out'>
          <Button onPress={goBack} title={"Aceptar"} isActive={true} />
        </div>
      </div>
    </Container>
  );
};

export default TermsConditionsAllSecurePage;
