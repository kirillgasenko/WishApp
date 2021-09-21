import { commonFetch } from "../../../utils/apiHelpers";

export const signinRequest = (body: any) => commonFetch('POST', '/user/registration', body);

export const logRequest = (body: any) => commonFetch('POST', '/user/authorization', body);
