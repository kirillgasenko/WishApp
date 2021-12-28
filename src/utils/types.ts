import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit"

export type CommonResponse = {
  [key: string]: string | number | undefined;
}

export type AnyThunkDispatch = ThunkDispatch<any, any, AnyAction>;