import { useMutation } from "react-query";
import { getToken } from "./auth-service";

export const useGetToken = (config = {}) => {
  return useMutation(
    ({ key, data }) => getToken(key, data).then((res) => res),
    config
  );
};
