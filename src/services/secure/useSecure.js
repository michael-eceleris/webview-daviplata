import { useMutation } from "react-query";
import { createInsurrance } from "./secure-service";

export const useCreateInsurrance = (config = {}) => {
  return useMutation(createInsurrance, config);
};
