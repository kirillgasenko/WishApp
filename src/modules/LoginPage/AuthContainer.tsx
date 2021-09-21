import React from 'react';
import { AuthFormTypes, LOG_IN_TYPE, SIGN_UP_TYPE } from './constants';
import { DataInputComponent } from './DataInputComponent';
import { LogFooter } from './LogFooter';
import { useAuth } from './redux/selectors';

const FooterInfo = ({ type }: { type: AuthFormTypes }) => {
  const Question = () => type === LOG_IN_TYPE ? 
    (<p>Уже есть аккаунт? <span style={{color: "#5C50E0"}}>Войти</span>.</p>) :
    (<p>Еще не зарегистрировались на I GIFT YOU? <br/><span style={{color: "#5C50E0"}}>Регистрация</span>.</p>)

  return(
    <div className="footer">
      <p>Продолжая вы принимаете условия I GIFT YOU:</p>
      <b>Условия предоставления услуг и Политика конфиденциальности.</b>
      <Question />
    </div>
  );
}

const Divider = () =>
  <div className="divider">
    <div className="line"/>
    <span className="middle-text"> Или </span>
    <div className="line"/>
  </div>

export const AuthContainer = () => {
  const { type: boxType } = useAuth();
  const isLogging = boxType === LOG_IN_TYPE || boxType === SIGN_UP_TYPE;
  
  return(
    <div className='auth-box'>
      <span className="cross">×</span>
      <div className='auth-container'>
        <div>
          <DataInputComponent type={boxType}/>
        </div>
        {isLogging && <Divider/>}
        {isLogging && <LogFooter/>}
      </div>
      {isLogging && <FooterInfo type={boxType}/>}
    </div>
  )
}
