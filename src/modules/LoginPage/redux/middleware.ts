import { AnyAction } from '@reduxjs/toolkit';
import { RootStateOrAny } from 'react-redux';
import { ThunkAction } from 'redux-thunk'
import { logRequest } from "./loginApi";
import { saveLoginResult } from "./reducer";

export const logUser = (body: any): ThunkAction<void, RootStateOrAny, any, AnyAction> => 
  async dispatch => 
    {
      const res = await logRequest(body);

      if (res?.error) {
        dispatch(saveLoginResult({ error: res.error}));
      }

      dispatch(saveLoginResult(res));
    };
