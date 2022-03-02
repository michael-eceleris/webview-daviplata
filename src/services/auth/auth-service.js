import { serviceAxios } from "../service-axios";
import { serviceRoutes } from "../service-routes";

export const getToken = (key, data) => {
  const url = serviceRoutes.auth.getToken(key);
  return serviceAxios.post(url, data).then((res) => res.data);
};
