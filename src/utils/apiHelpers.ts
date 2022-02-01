import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootStateOrAny } from "react-redux";
import { CommonResponse } from "./types";
import { getCookieValue } from "./functions";
import { DEFAULT_LINK } from "./constants";

export const commonFetch = (
  method: string,
  url: string,
  body?: Object | undefined,
  auth?: boolean
): Promise<CommonResponse> => {
  return fetch(DEFAULT_LINK + url, {
    method,
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Access-Control-Allow-Origin": DEFAULT_LINK,
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: getCookieValue("authKey") || "",
    },
    ...(body && { body: JSON.stringify(body) }),
  })
    .then((res) => {
      if (res.status === 204 && res.statusText === "No Content") return {};
      return res.json().then((json) => json);
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
