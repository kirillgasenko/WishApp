import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootStateOrAny } from "react-redux";
import { WishesResponse } from "../types/reduxTypes";

import { sendWish, saveError } from "./reducer";
import { postWishes } from "./wishesApi";

export const postUniqueWishes = (
  body: WishesResponse
): ThunkAction<void, RootStateOrAny, any, AnyAction> => async (dispatch) => {
  const res = await postWishes(body);

  if (res?.error || res?.message) {
    dispatch(saveError(res.message));
  }

  dispatch(sendWish(res));
};
