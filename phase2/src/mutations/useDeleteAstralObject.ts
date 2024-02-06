import { useMutation, useQueryClient } from "react-query";
import { AstralObject } from "../types";
import { endpoints, fetchApi } from "../utils/api";

const useDeleteAstralObject = () => {
  const queryClient = useQueryClient();

  return useMutation<
    unknown,
    unknown,
    { row: number; column: number; type: AstralObject }
  >({
    mutationFn: ({ row, column, type }) => {
      return fetchApi(`/${endpoints[type]}`, "DELETE", {
        row,
        column,
        candidateId: process.env.REACT_APP_CANDIDATE_ID,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries("map");
    },
  });
};

export default useDeleteAstralObject;
