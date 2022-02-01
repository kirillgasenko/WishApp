import { commonFetch } from "../../../utils/apiHelpers";
import { CommonResponse } from "../../../utils/types";
import { DEFAULT_LINK } from "../../../utils/constants";

export type AuthBody = {
  email: string;
  password: string;
  [key: string]: any;
};

export const regRequest = (body: any) =>
  authFetch("POST", "/user/registration", body);

export const logRequest = (body: any) => authFetch("POST", "/user/login", body);

export const newPassRequest = (body: any) =>
  commonFetch("POST", "/user/password", body);

export const updateRequest = () => commonFetch("POST", "/user/password/update");

export const authFetch = (
  method: string,
  url: string,
  body?: AuthBody | undefined
): Promise<CommonResponse> => {
  return fetch(DEFAULT_LINK + url, {
    method,
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Access-Control-Allow-Origin": DEFAULT_LINK,
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    ...(body && { body: JSON.stringify(body) }),
  })
    .then((res) => {
      const authKey = res.headers.get("Authorization");
      authKey && (document.cookie = `authKey=${authKey}`);
      return res.json().then((json) => {
        if (json.userId) {
          sessionStorage.setItem("userId", json.userId);
        }
        return json;
      });
    })
    .catch((error) => error);
};
