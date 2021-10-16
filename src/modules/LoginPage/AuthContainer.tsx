import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import {
  AuthFormTypes,
  INST_SENT_TYPE,
  LOG_IN_TYPE,
  TO_EMAIL_TYPE,
  SIGN_UP_TYPE,
  NEW_PASS_TYPE,
} from "./constants";
import { DataInputComponent } from "./DataInputComponent";
import { LogFooter } from "./LogFooter";
import { changeBoxType } from "./redux/reducer";
import { useAuth } from "./redux/selectors";

const FooterInfo = ({ type }: { type: AuthFormTypes }) => {
  const dispatch = useDispatch();
  const Question = () => {
    switch (type) {
      case LOG_IN_TYPE:
        return (
          <p>
            Еще не зарегистрировались на I GIFT YOU? <br />
            <span
              onClick={() => dispatch(changeBoxType(SIGN_UP_TYPE))}
              className="footer-link"
            >
              Регистрация
            </span>
          </p>
        );
      case SIGN_UP_TYPE:
        return (
          <p>
            Уже есть аккаунт?{" "}
            <span
              onClick={() => dispatch(changeBoxType(LOG_IN_TYPE))}
              className="footer-link"
            >
              Войти
            </span>
          </p>
        );
      default:
        return <div></div>;
    }
  };

  return (
    <div className="footer">
      <Question />
    </div>
  );
};

const Divider = () => (
  <div className="divider">
    <div className="line" />
    <span className="middle-text"> Или </span>
    <div className="line" />
  </div>
);

function switcher() {
  const types: AuthFormTypes[] = [
    LOG_IN_TYPE,
    SIGN_UP_TYPE,
    TO_EMAIL_TYPE,
    INST_SENT_TYPE,
    NEW_PASS_TYPE,
  ];
  let i = 0;

  return () => {
    console.log(i);
    i = (i + 1) % types.length;
    return types[i];
  };
}

export const AuthContainer = () => {
  const { type: boxType } = useAuth();
  const isLogging = boxType === LOG_IN_TYPE || boxType === SIGN_UP_TYPE;
  const { current: switchType } = useRef(switcher());
  const dispatch = useDispatch();

  return (
    <div className="auth-box">
      <span
        className="cross"
        onClick={() => dispatch(changeBoxType(switchType()))}
      >
        ×
      </span>
      <div className="auth-container">
        <div>
          <DataInputComponent />
        </div>
        {isLogging && <Divider />}
        {isLogging && <LogFooter />}
      </div>
      {(isLogging || boxType === INST_SENT_TYPE) && (
        <FooterInfo type={boxType} />
      )}
    </div>
  );
};
