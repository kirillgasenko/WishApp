
export const LOGIN_TYPE = "SIGNIN";
export const SIGNUP_TYPE = "SIGNUP";
export const TO_EMAIL_TYPE = "EMAIL";
export const NEW_PASS_TYPE = "NEWPASSWORD";


export type AuthFormTypes =  typeof LOGIN_TYPE | typeof SIGNUP_TYPE | typeof TO_EMAIL_TYPE | typeof NEW_PASS_TYPE;
export type FormInputsData = {
  name: string,
  placeholder?: string
}
export type FormConstructData = {
  inputs: FormInputsData[],
  submitButton: string,
  buttons?: string[],
  errorMsg?: string,
  passwordRecovery?: string
}
export type FormValues = {
  [key: string]: string
}
