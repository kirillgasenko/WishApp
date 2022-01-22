import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootStateOrAny } from "react-redux";
import { CommonResponse } from "./types";
import { getCookieValue } from "./functions";

export const commonFetch = (
  method: string,
  url: string,
  body?: Object | undefined,
  auth?: boolean
): Promise<CommonResponse> => {
  return fetch("https://igiftudev-app.herokuapp.com" + url, {
    method,
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Access-Control-Allow-Origin": "https://igiftudev-app.herokuapp.com",
      "Content-Type": "application/json",
      "Cookie": getCookieValue("authKey") || '',
    },
    ...(body && { body: JSON.stringify(body) }),
  })
    .then((res) => {
      console.log(res);
      if (auth) {
        const authKey = res.headers.get("Authorization");
        authKey && (document.cookie = `authKey=${authKey}`);
      }
      if (res.status === 204 && res.statusText === "No Content") return {};
      if (Object.keys(res).length) return res.json();
    })
    .catch((error) => error);
};

export const commonThunk = (
  request: Function,
  handleOk?: Function,
  handleError?: Function,
  extraOkAction?: Function,
  extraErrorAction?: Function
): ThunkAction<void, RootStateOrAny, any, AnyAction> => async (dispatch) => {
  const res = await request();

  if (res?.error || res.status >= 400) {
    handleError && dispatch(handleError(res));
    extraErrorAction && extraErrorAction();
  }

  handleOk && dispatch(handleOk(res));
  extraOkAction && extraOkAction();
};
