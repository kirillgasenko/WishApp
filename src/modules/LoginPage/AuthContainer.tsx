import React from 'react';
import { useDispatch } from 'react-redux';
import { AuthFormTypes, INST_SENT_TYPE, LOG_IN_TYPE, SIGN_UP_TYPE } from './constants';
import { DataInputComponent } from './DataInputComponent';
import { LogFooter } from './LogFooter';
import { changeBoxType } from './redux/reducer';
import { useAuth } from './redux/selectors';

const FooterInfo = ({ type }: { type: AuthFormTypes }) => {
  const dispatch = useDispatch();
  const Question = () => {
    switch(type) { 
      case LOG_IN_TYPE: 
        return (<p>Еще не зарегистрировались на I GIFT YOU? <br/><span onClick={() => dispatch(changeBoxType(SIGN_UP_TYPE))} className="footer-link">Регистрация</span>.</p>)
      case SIGN_UP_TYPE: 
        return (<p>Уже есть аккаунт? <span onClick={() => dispatch(changeBoxType(LOG_IN_TYPE))} className="footer-link">Войти</span>.</p>);
      case INST_SENT_TYPE: 
        return (
          <p>Не приходит письмо? Убедитесь, что оно не попало в папку спам. 
            <span onClick={() => undefined} className="footer-link">Отправить еще раз</span>
          .</p>);
      default: return (<div></div>);
    }
  };

  return(
    <div className="footer">
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
          <DataInputComponent />
        </div>
        {isLogging && <Divider />}
        {isLogging && <LogFooter />}
      </div>
      {(isLogging || boxType === INST_SENT_TYPE) && <FooterInfo type={boxType}/>}
    </div>
  )
}
