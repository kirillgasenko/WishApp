import React, { ChangeEventHandler, useState } from "react";
import {
  LOG_IN_TYPE,
  SIGN_UP_TYPE,
  NEW_PASS_TYPE,
  TO_EMAIL_TYPE,
  AuthFormTypes,
  FormConstructData,
  FormValues,
  INST_SENT_TYPE,
} from "./constants";
import "./authPage.scss";
import { Button } from "./components/Button";
import { useEffect } from "react";
import { LogHeader } from "./LogHeader";
import { useAuth } from "./redux/selectors";
import { useDispatch } from "react-redux";
import { changeBoxType, saveError } from "./redux/reducer";
import {
  logUser,
  regUser,
  requestNewPass,
  updatePassword,
} from "./redux/middleware";

const LOG_HEADER = "Организовывайте свои идеи подарков и мероприятий";
const FORGET_HEADER = ["Забыли пароль?", "Такое случается с лучшими из нас"];
const INSTR_HEADER = "Инструкция отправлена!";
const NEW_PASS_HEADER = [
  "Изменение пароля",
  "Длина пароля должна быть не менее 8 символов",
];

const EMAIL_PH = "Email";
const PASSWORD_PH = "Пароль";
const NEW_PASSWORD_PH = "Введите новый пароль";
const REPEAT_NEW_PASSWORD_PH = "Повторите пароль";

const LOGIN = "ВОЙТИ";
const CONTINUE = "ПРОДОЛЖИТЬ";
const SEND_INSTRUCTION = "ОТПРАВИТЬ ИНСТРУКЦИЮ";
const CHANGE_PASSWORD = "ИЗМЕНИТЬ ПАРОЛЬ";

const RECOVERY_HELP = "Забыли пароль?";
const ERROR_LOGIN_MESSAGE =
  "Неправильный логин или пароль. Может быть вы забыли пароль?";
const ERROR_EMAIL_ADDRESS_MESSAGE =
  "Кажется, вы ввели некорректный адрес, проверьте еще раз";
const ERROR_UNMATCH = "Пароли не совпадают";

function selectConstructObject(type: AuthFormTypes): FormConstructData {
  switch (type) {
    case LOG_IN_TYPE:
      return {
        inputs: [
          { name: "email", placeholder: EMAIL_PH },
          { name: "password", placeholder: PASSWORD_PH },
        ],
        submitButton: LOGIN,
        passwordRecovery: RECOVERY_HELP,
        errorMsg: ERROR_LOGIN_MESSAGE,
        header: LOG_HEADER,
      };
    case SIGN_UP_TYPE:
      return {
        inputs: [
          { name: "email", placeholder: EMAIL_PH },
          { name: "password", placeholder: PASSWORD_PH },
        ],
        submitButton: CONTINUE,
        header: LOG_HEADER,
      };
    case TO_EMAIL_TYPE:
      return {
        inputs: [{ name: "email", placeholder: EMAIL_PH }],
        submitButton: SEND_INSTRUCTION,
        errorMsg: ERROR_EMAIL_ADDRESS_MESSAGE,
        header: FORGET_HEADER,
      };
    case NEW_PASS_TYPE:
      return {
        inputs: [
          { name: "password", placeholder: NEW_PASSWORD_PH },
          { name: "repeatPassword", placeholder: REPEAT_NEW_PASSWORD_PH },
        ],
        submitButton: CHANGE_PASSWORD,
        errorMsg: ERROR_UNMATCH,
        header: NEW_PASS_HEADER,
      };
    default:
      return {
        inputs: [
          { name: "email", placeholder: EMAIL_PH },
          { name: "password", placeholder: PASSWORD_PH },
        ],
        submitButton: LOGIN,
        passwordRecovery: RECOVERY_HELP,
        errorMsg: ERROR_LOGIN_MESSAGE,
        header: LOG_HEADER,
      };
  }
}

function constructForm(
  constructData: FormConstructData,
  inputValues: FormValues,
  changeInput: ChangeEventHandler,
  onSubmit: any,
  error?: boolean | string,
  changeForm?: any
) {
  const editOnce = (function () {
    //TODO - change function to css define
    let isFirst = true;

    return () => {
      if (isFirst) {
        isFirst = false;
        return "first";
      }
      return "";
    };
  })();

  const passQuestion = constructData.passwordRecovery;

  const checkInputEmptiness =
    Object.values(inputValues).length >= constructData.inputs.length &&
    Object.values(inputValues).every((value) => !!value);

  return (
    <form className="auth-form">
      {error && (
        <div className="error-message">{constructData.errorMsg || error}</div>
      )}
      {constructData.inputs.map((elem) => (
        <input
          className={`${editOnce()} ${error && "input-warning"}`}
          name={elem.name}
          placeholder={elem.placeholder || ""}
          onChange={changeInput}
        />
      ))}
      {passQuestion && (
        <div className="passQuestion">
          <div className="bold" onClick={changeForm}>
            {constructData.passwordRecovery}
          </div>
        </div>
      )}
      {
        <Button
          onClick={onSubmit}
          isDisabled={!checkInputEmptiness}
          className={passQuestion ? "close-button" : ""}
        >
          {constructData.submitButton}
        </Button>
      }
    </form>
  );
}

const SendDescription: React.FC<{ email?: string }> = ({ email }) => {
  const dispatch = useDispatch();
  return (
    <>
      <LogHeader header={INSTR_HEADER} />
      <p>Вы получите наше письмо в течение 5 минут</p>
      <p style={{ fontWeight: 600 }}>{email}</p>
      <p>
        {"Не приходит письмо? Убедитесь, что оно не попало в папку спам. "}
        <span
          onClick={() => {
            dispatch(changeBoxType(INST_SENT_TYPE));
            dispatch(requestNewPass(email));
          }}
          className="footer-link"
        >
          Отправить еще раз
        </span>
      </p>
    </>
  );
};

export const DataInputComponent = () => {
  const dispatch = useDispatch();
  const { error: errorMsg, type } = useAuth();

  const [formData, setFormData] = useState<any>({});
  const constructObject = selectConstructObject(type);

  function onSubmit(formData: any) {
    console.log(formData);
    switch (type) {
      case LOG_IN_TYPE: {
        dispatch(logUser(formData));
        break;
      }
      case SIGN_UP_TYPE: {
        dispatch(regUser(formData));
        break;
      }
      case TO_EMAIL_TYPE: {
        dispatch(requestNewPass(formData));
        dispatch(changeBoxType(INST_SENT_TYPE));
        break;
      }
      case NEW_PASS_TYPE: {
        dispatch(updatePassword());
        break;
      }
    }
  }

  function changeFormData(event: any) {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
    dispatch(saveError(""));
  }

  function changeForm() {
    dispatch(changeBoxType(TO_EMAIL_TYPE));
  }

  const headerProps = (function () {
    const { header } = constructObject;
    if (Array.isArray(header)) {
      return {
        header: header[0],
        additional: header[1],
      };
    }
    return { header } as { header: string };
  })();

  // useEffect(() => {
  //   const initial: FormValues = {};
  //   setFormData(initial);
  // }, [type]);

  if (type === INST_SENT_TYPE) {
    return <SendDescription email={formData?.email} />;
  }

  return (
    <>
      <LogHeader {...headerProps} />
      {constructForm(
        constructObject,
        formData,
        changeFormData,
        () => onSubmit(formData),
        errorMsg,
        changeForm
      )}
    </>
  );
};
