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
          <h1 className='mb-4 text-center'>Términos y Condiciones</h1>
          <p className='text-1 mb-4'>
            Aplica una (1) reclamación (solicitud) por vigencia por fractura de
            pantalla.
          </p>
          <p className='text-1 mb-4'>
            No aplica para Netbooks, Plantas, Tablets, Phablets, Módems o
            equipos comprados con fecha anteriores al inicio de la promoción.
          </p>
          <p className='text-1 mb-4'>
            La reparación de la pantalla no cubre: daños en la tarjeta
            principal, módulos de pantalla, carcasas laterales, batería, ni
            daños por humedad en el equipo, ni manipulación en servicio técnico.
          </p>
          <p className='text-1 mb-4'>
            La reparación y logística de la cobertura de protección de pantalla
            se realizará con el servicio técnico autorizado por ACINCO SAS.
          </p>
          <p className='text-1 mb-4'>
            No aplica para equipos comprados en otros países.
          </p>
          <p className='text-1 mb-4'>
            Si al momento de la reparación del producto este presenta otra clase
            de daños diferentes a la ruptura de la pantalla, este valor deberá
            ser asumido por el usuario.
          </p>
          <p className='text-1 mb-4'>
            La prestación de los servicios de asistencia se hará única y
            excluisivamente con la reparación de la pantalla; Si al momento de
            la reparación de la pantalla, el equipo de telefonía móvil presenta
            otra clase de daños diferentes a la fractura de la pantalla, los
            valores y gastos adicionlaes deberán ser asumidos por el usuario.
          </p>
          <p className='text-1 mb-4'>
            Para la reparación en algunas marcas o referencias, ACINCO S.A.S.
            podrá utilizar repuestos o partes genéricas de categoría triple A.
          </p>
          <p className='text-1 mb-4'>
            ACINCO S.A.S. prestará la asistencia a través del operador de
            servicio técnico autorizado por este y que será informado al usuario
            en la orden de reparación. El usuario deberá dirigirse al punto del
            operador logístico indicado por ACINCO S.A.S. para coordinar la
            reparación y entrega del equipo.
          </p>
          <p className='text-1 mb-4'>
            Una vez el operador efectué la revisión técnica y realice el
            diagnóstico del equipo, le comunicará al usuario los tiempos de
            entrega del equipo, así como el hallazgo de daños adicionales que
            puedan encontrarse en el mismo. En caso de que el equipo móvil
            cuente con daños adicionales, distintos a losdispuestos en la
            cobertura de la asistencia, el operador cotizará estos valores y el
            usuario será quien decida si asume estos valores adicionales, es
            caso de que el usuario no acepte asumir estos gastos adicionales,
            ACINCO S.A.S deberá enviar por escrito al correo electrónico
            indicado, las razones de la no reparación y le entregará el equipo
            móvil.
          </p>
          <p className='text-1 mb-4'>
            En el momento en que el equipo móvil se encuentre reparado, esté
            será enviado a la dirección indicada por el usuario. ACINCO S.A.S.,
            contará con máximo nueve (9) días hábiles para entregar el equipo
            reparado, contados desde la entrega del equipo al operador logístico
            si no tiene ningún daño adicional, en el evento en que lo tenga, los
            nueve (9) días empezarán a contar desde la autorización otorgada por
            el usuario para reparar los daños adicionales del equipo.
          </p>
          <h2>Condiciones Generales</h2>
          <p className='text-1 mb-4'>
            La asistencia de protección de pantalla es asistida por ACINCO
            S.A.S., la cual cubre una (1) reclamación (solicitud) por la rotura
            accidental de pantalla por una vigencia de doce (12) meses a partir
            de la fecha de adquisición de la póliza.
          </p>
          <p className='text-1 mb-4'>
            Estarán excluidos del servicio todos aquellos eventos originados,
            basados o atribuibles, de manera directa o inderecta a:
          </p>
          <ul className='list-daviplata ml-5 mt-3 mb-4'>
            <li className='li-daviplata'>
              <p className='text-1 mb-2'>
                Lucro cesante, o pérdidas consecuenciales.
              </p>
            </li>
            <li className='li-daviplata'>
              <p className='text-1 mb-2'>
                Uso indebido, incorrecto o ilícito del equipo de telefonía
                móvil.
              </p>
            </li>
            <li className='li-daviplata'>
              <p className='text-1 mb-2'>
                Daños que no sean consecuencia de un evento accidental, súbito e
                imprevisto, esto es, daños o pérdidas causados por el uso u
                operación ordinaria del celular, tales como desgaste,
                deformación, corrosión, herrumbre y deterioro por falta de uso o
                proveniente de las condiciones atmosféricas normales.
                Independientemente de las causas de la pérdida.
              </p>
            </li>
            <li className='li-daviplata'>
              <p className='text-1 mb-2'>
                Dolo, culpa grave o mala fe del usuario, de sus representantes o
                de un tercero autorizado por el usuario.
              </p>
            </li>
            <li className='li-daviplata'>
              <p className='text-1 mb-2'>
                Motín, conmoción civil o popular, vandalismo y actos mal
                intencionados de terceros.
              </p>
            </li>
            <li className='li-daviplata'>
              <p className='text-1 mb-2'>
                Decomiso o embargo del bien asistido.
              </p>
            </li>
            <li className='li-daviplata'>
              <p className='text-1 mb-2'>
                Pérdidas causadas o resultantes de acciones gubernamentales,
                tales como confiscación, incautación o destrucción del bien
                asistido por orden de autoridad gubernamental competente.
              </p>
            </li>
            <li className='li-daviplata'>
              <p className='text-1 mb-2'>
                Costos por pérdidas de datos, programas o información.
              </p>
            </li>
            <li className='li-daviplata'>
              <p className='text-1 mb-2'>
                Pérdidas por fraudes o actos deshonestos de terceros, tales como
                clonación y similares.
              </p>
            </li>
            <li className='li-daviplata'>
              <p className='text-1 mb-2'>
                Hurto parcial del bien asistido (hurto de sus partes, de sus
                componentes o de sus periféricos).
              </p>
            </li>
            <li className='li-daviplata'>
              <p className='text-1 mb-2'>
                Extravío total o parcial del bien asistido.
              </p>
            </li>
            <li className='li-daviplata'>
              <p className='text-1 mb-2'>
                Pérdida por desaparición misteriosa.
              </p>
            </li>
            <li className='li-daviplata'>
              <p className='text-1 mb-2'>
                Pérdidas como consecuencia de que el usuario, o cualquier
                persona a quien éste le haya confiado el bien asistado, se haya
                desprendido intencionalmente de la misma.
              </p>
            </li>
            <li className='li-daviplata'>
              <p className='text-1 mb-2'>
                Pérdidas o daños de elementos considerados accesorios o
                periféricos del bien asistido como baterías, audífonos, manos
                libres, forros, teclados y cargadores, y accesorios similares.
              </p>
            </li>
            <li className='li-daviplata'>
              <p className='text-1 mb-2'>
                Daños y/o deterioro del equipo, de los cuales sea responsable el
                fabricante o proveedor de los bienes o aquellos que estén
                cubiertos por la garantía del equipo.
              </p>
            </li>
            <li className='li-daviplata'>
              <p className='text-1 mb-2'>
                Fallas lógicas causadas al equipo terminal por virus o descargas
                de internet o como consecuencia de la culpa grave del usuario o
                de un tercero autorizado por este.
              </p>
            </li>
            <li className='li-daviplata'>
              <p className='text-1 mb-2'>
                Reparaciones no autorizadas o realizadas por fuera de los
                centros técnicos especializados avalados por Acinco.
              </p>
            </li>
            <li className='li-daviplata'>
              <p className='text-1 mb-2'>Daños por variación de voltaje.</p>
            </li>
            <li className='li-daviplata'>
              <p className='text-1 mb-2'>
                Cuando verificados o analizados los documentos e información
                aportada por el usuario en la solicitud de asistencia, se
                evidencien inconsistencias en la información suministrada.
              </p>
            </li>
            <li className='li-daviplata'>
              <p className='text-1 mb-2'>
                Cuando en la declaración de los hechos que dieron origen a la
                fractura de la pantalla del equipo de telefonía móvil, el
                usuario no haya manifestado de manera correcta, clara, veraz y
                suficiente por qué el equipo de telefonía móvil presentaba
                actividad con una sim card diferente a la registrada
                inicialmente con el equipo de telefonía móvil.
              </p>
            </li>
          </ul>
          <h2>Atención al Cliente</h2>
          <p className='text-1 mb-4'>
            La solicitud del servicio se puede realizar a través de la línea 01
            8000 513 323 o en Bogotá al 4898599 de lunes a sábado de 8 am a 6
            pm o por medio del chat habilitado en la siguiente página
            www.aseguratucelular.com.
          </p>
          <h2>Documentación</h2>
          <p className='text-1 mb-4'>
            Para hacer efectivo el servicio el usuario debe radicar los
            siguientes documentos a la aseguradora por medio de la página web
            www.aseguratucelular.com.
          </p>
          <ul className='list-daviplata ml-5 mt-3 mb-4'>
            <li className='li-daviplata'>
              <p className='text-1 mb-2'>
                Formato de solicitud debidamente diligenciado.
              </p>
            </li>
            <li className='li-daviplata'>
              <p className='text-1 mb-2'>Factura de compra del equipo.</p>
            </li>
            <li className='li-daviplata'>
              <p className='text-1 mb-2'>
                Copia de la cédula de ciudadanía del cliente ampliado al 150%.
              </p>
            </li>
            <li className='li-daviplata'>
              <p className='text-1 mb-2'>
                Tres (3) fotos de la pantalla quebrada (desde un ángulo frontal,
                lateral y posterior del equipo).
              </p>
            </li>
            <li className='li-daviplata'>
              <p className='text-1 mb-2'>
                Imagen del estado del equipo (laterales y frontales).
              </p>
            </li>
            <li className='li-daviplata'>
              <p className='text-1 mb-2'>
                Si la unidad enciende imagen del Imei desde el equipo (marcar
                *#06#).
              </p>
            </li>
          </ul>
          <p className='text-1 mb-4'>
            En un máximo de cinco (5) días hábiles de radicar la documentación,
            ACINCO S.A.S. analizará los documentos y dará una respuesta. Si es
            pre-aprobado, se enviará al usuario una solicitud de pago para que
            realice el copago y una orden de reparación para que el equipo sea
            llevado a un punto logístico a nivel nacional autorizado por la
            ACINCO, para que el equipo sea trasladado al taller para su
            reparación o en su defecto en el lugar de domicilio indicado por el
            cliente.
          </p>
          <p className='text-1 mb-4'>
            Si por el contrario ACINCO S.A.S. da una respuesta negativa a la
            reclamación, deberá notificarle al usuario por escrito vía correo
            electrónico, las causales de objeción para la prestación de la
            asistencia.
          </p>
          <h2>Límite máximo de responsabilidad</h2>
          <p className='text-1 mb-4'>
            El valor comercial de reparación del cristal o display del equipo de
            telefonía móvil, el cual variará dependiendo del modelo del equipo,
            constituye la máxima responsabilidad de ACINCO S.A.S., en caso de
            fractura de pantalla, y, en consecuencia, no será responsable por
            los valores que excedan a esta, los cuales deberán ser asumidos por
            el usuario.
          </p>
          <p className='text-1 mb-2'>
            El valor de reparación variará dependiendo del modelo del equipo de
            telefonía móvil.
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
