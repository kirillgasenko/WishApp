import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../store';
import { AuthFormTypes, LOG_IN_TYPE } from '../constants';

type LogResponse = {
  [key: string]: string | number | undefined;
}

interface AuthState {
  type: AuthFormTypes,
  login: LogResponse,
  error: string,
};

const initialState: AuthState = {
  type: "SIGNIN",
  login: {},
  error: 'asdasd',
}

export const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    changeFormType: (state, action: PayloadAction<AuthFormTypes>) => {
      state.type = action.payload
    },
    saveLoginResult: (state, action: PayloadAction<LogResponse>) => {
      state.login = action.payload;
    },
    clearForm: state => { 
      return { ...initialState, type: state.type };
    },
  }
});

export const { changeFormType: changeType, saveLoginResult, clearForm } = authSlice.actions;

export const authReducer = authSlice.reducer;

export const getFormType = (state: RootState) => state.authentication.type;
