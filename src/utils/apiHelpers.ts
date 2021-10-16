import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootStateOrAny } from "react-redux";
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
