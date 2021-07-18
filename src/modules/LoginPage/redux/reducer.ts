import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../store';
import { AuthFormTypes, LOGIN_TYPE } from '../constants';

interface AuthState {
  type: AuthFormTypes,
};

const initialState: AuthState = {
  type: LOGIN_TYPE
}

export const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    changeFormType: (state, action: PayloadAction<AuthFormTypes>) => {
      state.type = action.payload
    },
  }
});

export const { changeFormType: changeType } = authSlice.actions;

export const authReducer = authSlice.reducer;

export const getFormType = (state: RootState) => state.authentication.type;
