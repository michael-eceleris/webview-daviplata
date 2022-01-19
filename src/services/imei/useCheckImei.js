import { useQuery } from "react-query";
import { imei } from "./imei-check-service";

export const useCheckImei = (config = {}) => {
  return useQuery(["checkimei"], imei, config);
};
