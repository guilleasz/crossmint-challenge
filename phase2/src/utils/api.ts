import { AstralObject } from "../types";

type HttpMethod = "POST" | "GET" | "PUT" | "DELETE" | "PATCH";

export const fetchApi = async (
  url: string,
  method: HttpMethod = "GET",
  body?: Record<string, any>
) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}${url}`, {
    method,
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });
  const json = await res.json();
  console.log(json.errr, res.status);
  if (json.error || res.status >= 400) throw res;
  return json;
};

export const endpoints = {
  [AstralObject.Soloon]: "soloons",
  [AstralObject.Polyanet]: "polyanets",
  [AstralObject.Cometh]: "comeths",
};
