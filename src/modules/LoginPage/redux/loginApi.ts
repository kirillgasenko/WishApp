import { commonFetch } from "../../../utils/apiHelpers";

export const regRequest = (body: any) =>
  commonFetch("POST", "/user/registration", body, true);

export const logRequest = (body: any) => commonFetch("POST", "/user/login", body, true);

export const newPassRequest = (body: any) =>
  commonFetch("POST", "/user/password", body);

export const updateRequest = () => commonFetch("POST", "/user/password/update");
