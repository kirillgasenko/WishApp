import React, { ChangeEventHandler, ReactElement, useState } from 'react';
import { LOGIN_TYPE, SIGNUP_TYPE, NEW_PASS_TYPE, TO_EMAIL_TYPE, AuthFormTypes, FormConstructData, FormValues } from './constants';
import './authPage.scss';
import { Button } from './components/Button';

const EMAIL_PH = "Email";
const PASSWORD_PH = "Пароль";
const NEW_PASSWORD_PH = "Введите новый пароль";
const REPEAT_NEW_PASSWORD_PH = "Повторите пароль";

const LOGIN = "ВОЙТИ";
const CONTINUE = "ПРОДОЛЖИТЬ";
const SEND_INSTRUCTION = "Отправить инструкцию";
const CHANGE_PASSWORD = "ИЗМЕНИТЬ ПАРОЛЬ";

const RECOVERY_HELP = "Забыли пароль?";
const ERROR_LOGIN_MESSAGE = "Неправильный логин или пароль. Может быть вы забыли пароль?";
const ERROR_EMAIL_ADDRESS_MESSAGE = "Кажется, вы ввели некорректный адрес, проверьте еще раз";
const ERROR_UNMATCH = "Пароли не совпадают";

function selectConstructObject(type: AuthFormTypes): FormConstructData {
  switch(type) {
    case LOGIN_TYPE: 
      return {
        inputs: [
          { name: 'email', placeholder: EMAIL_PH },
          { name: 'password', placeholder: PASSWORD_PH }
        ],
        submitButton: LOGIN,
        passwordRecovery: RECOVERY_HELP,
        errorMsg: ERROR_LOGIN_MESSAGE
      }
    case SIGNUP_TYPE:
      return {
        inputs: [
          { name: 'email', placeholder: EMAIL_PH },
          { name: 'password', placeholder: PASSWORD_PH }
        ],
        submitButton: CONTINUE,
      }
    case TO_EMAIL_TYPE:
      return {
        inputs: [
          { name: 'email', placeholder: EMAIL_PH },
        ],
        submitButton: SEND_INSTRUCTION,
        errorMsg: ERROR_EMAIL_ADDRESS_MESSAGE
      }
    case NEW_PASS_TYPE:
      return {
        inputs: [
          { name: 'password', placeholder: NEW_PASSWORD_PH },
          { name: 'repeatPassword', placeholder: REPEAT_NEW_PASSWORD_PH }
        ],
        submitButton: CHANGE_PASSWORD,
        errorMsg: ERROR_UNMATCH
      }
  }
}

function constructForm(constructData: FormConstructData, inputValues: FormValues, changeInput: ChangeEventHandler, submitData: any, isError?: boolean, changeFrom?: any) {
  const editOnce = function() {
    let isFirst = true;

    return () => {
      if(isFirst) {
        isFirst = false;
        return 'first';
      }
      return '';
    }
  }();

  const passQuestion = constructData.passwordRecovery;

  return(
    <form>
      {isError && <div>{constructData.errorMsg}</div>}
      {
        constructData.inputs.map(elem => 
          <input className={editOnce()} name={elem.name} placeholder={elem.placeholder || ''} onChange={changeInput}>{inputValues[elem.name]}</input>
        )
      }
      {passQuestion && 
        <div className="passQuestion">
          <div onClick={changeFrom}>{constructData.passwordRecovery}</div>
        </div>
      }
      {
        <Button onSubmit={submitData} className={passQuestion ? "close-button" : ""}>{constructData.submitButton}</Button>
      }
    </form>
  );
}

export const DataInputComponent: React.FC<{type: AuthFormTypes}> = ({type}) => {
  const [formData, setFormData] = useState({});
  const constructObject = selectConstructObject(type);

  const onSubmit = (formData: any) => {
    console.log(formData);
    //get request based on type
  }
  const isError = false;

  function changeFormData(event: any) {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  return constructForm(constructObject, formData, changeFormData, onSubmit, isError);
}