import { serviceAxios } from "../service-axios";
import { serviceRoutes } from "../service-routes";

export const getToken = (key) => {
  const url = serviceRoutes.auth.getToken(key);
  return serviceAxios.get(url).then((res) => res.data);
};
