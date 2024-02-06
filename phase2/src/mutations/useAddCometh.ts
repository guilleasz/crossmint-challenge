import { ComethDirection, AstralObject } from "../types";
import useAddAstralObject from "./useAddAstralObject";

const useAddCometh = () => {
  return useAddAstralObject<{ direction: ComethDirection }>(
    AstralObject.Cometh
  );
};

export default useAddCometh;
