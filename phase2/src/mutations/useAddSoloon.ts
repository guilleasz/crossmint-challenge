import { AstralObject, SoloonColor } from "../types";
import useAddAstralObject from "./useAddAstralObject";

const useAddSoloon = () => {
  return useAddAstralObject<{ color: SoloonColor }>(AstralObject.Soloon);
};

export default useAddSoloon;
