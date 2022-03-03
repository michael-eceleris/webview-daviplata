import { serviceAxios } from "../service-axios";
import { serviceRoutes } from "../service-routes";

export const getEncryptedData = (data) => {
  const url = serviceRoutes.encrypt.getContent();
  return serviceAxios.post(url, data).then((res) => res.data);
};
