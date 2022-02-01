import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../store";
import { WishesFormTypes } from "../constants";
import { WishesResponse } from "../types/reduxTypes";

interface WishesState {
  type: WishesFormTypes;
  wishes: WishesResponse;
  error: string;
}

const initialState: WishesState = {
  type: "POST_NEW_WISHES",
  wishes: {},
  error: "",
};

export const wishSlice = createSlice({
  name: "wishes",
  initialState,
  reducers: {
    sendWish: (state, action: PayloadAction<WishesResponse>) => {
      state.wishes = action.payload;
    },
    receiveWish: (state, action: PayloadAction<WishesResponse>) => {
      state.wishes = action.payload;
    },
    saveError: (state, { payload }) => {
      state.error = payload;
    },
    clearForm: (state) => {
      return { ...initialState, type: state.type };
    },
  },
});

export const {
  sendWish,
  receiveWish,
  clearForm,
  saveError,
} = wishSlice.actions;

export const wishesReducer = wishSlice.reducer;

export const getFormType = (state: RootState) => state.wishes.type;

export const receivedDate = (state: RootState) => {
  console.log(state);
  return state;
};
