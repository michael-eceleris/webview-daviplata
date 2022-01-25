import { serviceAxios } from "../service-axios";
import { serviceRoutes } from "../service-routes";

export const checkImeiService = (id, body) => {
  const url = serviceRoutes.imei.getPolicy(id);
  return serviceAxios.post(url, body).then((res) => res.data);
};
