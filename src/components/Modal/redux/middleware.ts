import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootStateOrAny } from "react-redux";
import { WishesResponse } from "../types/reduxTypes";

import { sendWish, saveError, receiveWish } from "./reducer";
import { getWishes, postWishes } from "./wishesApi";

export const postUniqueWishes = (
  body: WishesResponse
): ThunkAction<void, RootStateOrAny, any, AnyAction> => async (dispatch) => {
  const res = await postWishes(body);

  if (res?.error || res?.message) {
    dispatch(saveError(res.message));
  }

  dispatch(sendWish(res));
};

export const getUniqueWishes = (): ThunkAction<
  void,
  RootStateOrAny,
  any,
  AnyAction
> => async (dispatch) => {
  const res = await getWishes();

  if (res?.error || res?.message) {
    dispatch(saveError(res.message));
  }

  dispatch(receiveWish(res));
};
