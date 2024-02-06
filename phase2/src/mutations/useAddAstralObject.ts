import { useMutation, useQueryClient } from "react-query";
import { endpoints, fetchApi } from "../utils/api";
import { AstralObject } from "../types";

const useAddAstralObject = <ExtraData>(element: AstralObject) => {
  const queryClient = useQueryClient();
  return useMutation<
    unknown,
    unknown,
    { row: number; column: number } & ExtraData
  >({
    mutationFn: (body) => {
      return fetchApi(`/${endpoints[element]}`, "POST", {
        ...body,
        candidateId: process.env.REACT_APP_CANDIDATE_ID,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries("map");
    },
  });
};

export default useAddAstralObject;
