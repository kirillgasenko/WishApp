import { AnyAction } from "@reduxjs/toolkit";
import { RootStateOrAny } from "react-redux";
import { ThunkAction } from "redux-thunk";
import { INST_SENT_TYPE, LOG_IN_TYPE } from "../constants";
import {
  logRequest,
  passwordRequest,
  regRequest,
  updateRequest,
} from "./loginApi";
import { changeBoxType, saveError, saveLoginResult } from "./reducer";

export const logUser = (
  body: any
): ThunkAction<void, RootStateOrAny, any, AnyAction> => async (dispatch) => {
  const res = await logRequest(body);
  console.log(res);

  if (res?.error) {
    dispatch(saveError(res.message));
  }

  dispatch(saveLoginResult(res));
};

export const regUser = (
  body: any
): ThunkAction<void, RootStateOrAny, any, AnyAction> => async (dispatch) => {
  const res = await regRequest(body);

  if (res?.error || res?.message) {
    dispatch(saveError(res.message));
  }

  dispatch(saveLoginResult(res));
};

export const requestPassword = (
  body: any
): ThunkAction<void, RootStateOrAny, any, AnyAction> => async (dispatch) => {
  const res = await passwordRequest(body);

  if (res?.error) {
    dispatch(saveError(res.message));
  }

  dispatch(changeBoxType(INST_SENT_TYPE));
};

export const updatePassword = (): ThunkAction<
  void,
  RootStateOrAny,
  any,
  AnyAction
> => async (dispatch) => {
  const res = await updateRequest();

  if (res?.error) {
    dispatch(saveError(res.message));
  }
  console.log("success");
};
