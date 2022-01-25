import { serviceAxios } from "../service-axios";
import { serviceRoutes } from "../service-routes";

export const createPolicy = (body) => {
  const url = serviceRoutes.policy.create();
  return serviceAxios.post(url, body).then((res) => res.data);
};
