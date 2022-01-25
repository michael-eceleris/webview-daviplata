import { useQuery } from "react-query";
import { getToken } from "./auth-service";

export const useGetToken = (key, config = {}) => {
  return useQuery(["auth/token"], () => getToken(key), config);
};
