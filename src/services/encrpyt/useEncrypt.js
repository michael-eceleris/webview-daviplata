import { useMutation } from "react-query";
import { getEncryptedData } from "./encrypt-service";

export const useEncryptData = (config = {}) => {
  return useMutation(
    (data) => getEncryptedData(data).then((res) => res),
    config
  );
};
