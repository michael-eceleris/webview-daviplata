import { useMutation } from "react-query";
import { createPolicy } from "./secure-service";

export const useCreatePolicy = (config = {}) => {
  return useMutation((data) => createPolicy(data), config);
};
