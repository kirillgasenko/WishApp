export const LOG_IN_TYPE = "LOGIN";
export const SIGN_UP_TYPE = "SIGNUP";
export const TO_EMAIL_TYPE = "EMAIL";
export const NEW_PASS_TYPE = "NEWPASSWORD";
export const INST_SENT_TYPE = "INST_SENT";

export type AuthFormTypes =
  | typeof LOG_IN_TYPE
  | typeof SIGN_UP_TYPE
  | typeof TO_EMAIL_TYPE
  | typeof NEW_PASS_TYPE
  | typeof INST_SENT_TYPE;

export type FormInputsData = {
  name: string;
  placeholder?: string;
};
export type FormConstructData = {
  inputs: FormInputsData[];
  submitButton: string;
  header: string | string[];
  buttons?: string[];
  errorMsg?: string;
  passwordRecovery?: string;
};
export type FormValues = {
  [key: string]: string;
};
