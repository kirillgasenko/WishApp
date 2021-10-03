import React from 'react';
import { useDispatch } from 'react-redux';
import { AuthFormTypes, LOG_IN_TYPE, SIGN_UP_TYPE } from './constants';
import { DataInputComponent } from './DataInputComponent';
import { LogFooter } from './LogFooter';
import { changeBoxType } from './redux/reducer';
import { useAuth } from './redux/selectors';

const FooterInfo = ({ type }: { type: AuthFormTypes }) => {
  const dispatch = useDispatch();
  const Question = () => type === LOG_IN_TYPE ? 
    (<p>Еще не зарегистрировались на I GIFT YOU? <br/><span onClick={() => dispatch(changeBoxType(SIGN_UP_TYPE))} className="footer-link">Регистрация</span>.</p>) :
    (<p>Уже есть аккаунт? <span onClick={() => dispatch(changeBoxType(LOG_IN_TYPE))} className="footer-link">Войти</span>.</p>)

  return(
    <div className="footer">
      <p>Продолжая вы принимаете условия I GIFT YOU:<br/>
      <b>Условия предоставления услуг и Политика конфиденциальности.</b></p>
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
