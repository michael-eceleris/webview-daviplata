import { useMutation } from "react-query";
import { useQuery } from "react-query";
import { createPolicy } from "./secure-service";
import { getFilePolicy } from "./secure-service";

export const useCreatePolicy = (config = {}) => {
  return useMutation((data) => createPolicy(data), config);
};

export const useGetFilePolicy = (params, config = {}) => {
  return useQuery(["policy/file"], () => getFilePolicy(params), config);
};
