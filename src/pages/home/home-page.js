import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { When } from "react-if";
import { Unless } from "react-if";

import Container from "../../components/layout/Container";
import PhoneFracture from "../../assets/img/screen-fracture.jpg";
import PhoneSafe from "../../assets/img/all-safe.jpg";
import LogoATS from "../../assets/img/ats-logo.png";
import BigBrand from "../../components/brand/big-brand";
import SkeletonCard from "../../components/skeleton/card";

import { useGetToken } from "../../services/auth/useAuth";
import { serviceAxios } from "../../services/service-axios";
import { useUser } from "../../providers/user/userProvider";

const HomePage = () => {
  const { key } = useParams();
  const { push } = useHistory();
  const { setUser } = useUser();
  const { isLoading, mutateAsync: getToken } = useGetToken();

  /* useEffect(() => {
    window.initView(
      "zG+B6Zy30LXsZCP5WhidBfHIbyvJOKP92koEZ7Bts6Epf3e5ViNQDcTfaCnDx+SZYqpltJjEvEatqKF71gMu5vJ2vW+s9Uby5ftPj39zraBinCnrlCEmLaqqQehJvGUllJftXVFuIbpnaMeWQTTmD/Et3Qj134UlxbqOiQxrF9CvFD1hwYyuydrhXl+pp+VWNvXTnwRpwojygmhdFogTwyX4lUAC3X+4mjYeMTdi1or0sot87jloqv1MZbRx0IJ2eMnblc9FNaJ52EGapexKF4e9Ye6YXgeYaqzjPlr0vP6GQQ5nO1EZjeaP0E0CHXa5SGL37rSu/iMqx1CI0jo/bDRmAAOcxvdtVwsEAl1Dp81GA3UUTSfs58zg1vLVEEP3"
    );
  }); */

  useEffect(() => {
    const getUser = async () => {
      let data = await sessionStorage.getItem("content");
      getToken({ key, data: { contentData: data } })
        .then((res) => {
          serviceAxios.interceptors.request.use((config) => {
            config.headers.Authorization = `Bearer ${res.data.contentData}`;
            return config;
          });
          setUser(res.data.user);
        })
        .catch((err) => {
          push("/");
        });
    };
    getUser();
    //eslint-disable-next-line
  }, []);

  return (
    <Container>
      <When condition={!isLoading}>
        <div className='col-span-full bg-white rounded-2xl mt-auto mb-auto'>
          <BigBrand />
          <div className='grid grid-cols-4 col-span-full bg-white rounded-2xl px-2 gap-2 py-2 pb-3 mt-4'>
            <Link
              to={{ pathname: `/${key}/all-secure` }}
              className='col-span-2 rounded-2xl card--product--shadow pb-3'
            >
              <div className='h-24'>
                <img
                  src={PhoneSafe}
                  className='rounded-t-2xl w-full h-full'
                  alt='phone-safe'
                />
              </div>
              <div className='h-16 mt-3'>
                <h3 className='text-center'>
                  Seguro contra daño y robo de su celular
                </h3>
                <p className='text-red-500 text-2 text-center'>Desde</p>
                <p className='text-2 text-center'>$50.000</p>
              </div>
            </Link>
            <Link
              to={{ pathname: `/${key}/screen-secure` }}
              className='col-span-2 rounded-2xl card--product--shadow pb-3'
            >
              <div className='h-24'>
                <img
                  src={PhoneFracture}
                  className='rounded-t-2xl h-full w-full'
                  alt='phone-screen-broken'
                />
              </div>
              <div className='h-16 mt-3'>
                <h3 className='text-center'>
                  Seguro para la pantalla de su celular
                </h3>
                <p className='text-red-500 text-2 text-center'>Desde</p>
                <p className='text-2 text-center'>$8.000</p>
              </div>
            </Link>
            <div className='col-span-full flex justify-end px-1 pt-1'>
              <img src={LogoATS} className='h-7' alt='logo-ats' />
            </div>
          </div>
        </div>
      </When>
      <Unless condition={!isLoading}>
        <SkeletonCard withClass='col-span-full h-2/3 mt-auto mb-auto' />
      </Unless>
    </Container>
  );
};

export default HomePage;
