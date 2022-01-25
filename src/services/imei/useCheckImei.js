import { useMutation } from "react-query";
import { checkImeiService } from "./imei-check-service";

export const useCheckImei = (config = {}) => {
  return useMutation(
    ({ id, body }) => checkImeiService(id, body).then((res) => res),
    config
  );
};
