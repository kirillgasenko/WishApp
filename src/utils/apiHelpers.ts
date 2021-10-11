import { CommonResponse } from "./types";

export const commonFetch = (
  method: string,
  url: string,
  body?: Object | undefined
): Promise<CommonResponse> => {
  return fetch("https://igiftudev-app.herokuapp.com" + url, {
    method,
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Access-Control-Allow-Origin": "https://igiftudev-app.herokuapp.com",
      "Content-Type": "application/json",
    },
    ...(body && { body: JSON.stringify(body) }),
  })
    .then((res) => {
      if (res.status === 204 && res.statusText === "No Content") return {};
      else return res.json();
    })
    .catch((error) => error);
};
