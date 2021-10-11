import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../store";
import {
  AuthFormTypes,
  LOG_IN_TYPE,
  NEW_PASS_TYPE,
  TO_EMAIL_TYPE,
} from "../constants";

type LogResponse = {
  [key: string]: string | number | undefined;
};

interface AuthState {
  type: AuthFormTypes;
  login: LogResponse;
  error: string;
}

const initialState: AuthState = {
  type: TO_EMAIL_TYPE,
  login: {},
  error: "",
};

export const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    changeBoxType: (state, action: PayloadAction<AuthFormTypes>) => {
      state.type = action.payload;
    },
    saveLoginResult: (state, action: PayloadAction<LogResponse>) => {
      state.login = action.payload;
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
  changeBoxType,
  saveLoginResult,
  clearForm,
  saveError,
} = authSlice.actions;

export const authReducer = authSlice.reducer;

export const getFormType = (state: RootState) => state.authentication.type;
