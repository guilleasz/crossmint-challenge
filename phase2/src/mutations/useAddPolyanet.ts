import { AstralObject } from "../types";
import useAddAstralObject from "./useAddAstralObject";

const useAddPolyanet = () => {
  return useAddAstralObject(AstralObject.Polyanet);
};

export default useAddPolyanet;
