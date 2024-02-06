import { useQuery } from "react-query";
import { fetchApi } from "../utils/api";
import { GalaxyCell } from "../types";

const useMap = () => {
  return useQuery<GalaxyCell[][]>("map", async () => {
    const res = await fetchApi(`/map/${process.env.REACT_APP_CANDIDATE_ID}`);
    return res.map.content;
  });
};

export default useMap;
