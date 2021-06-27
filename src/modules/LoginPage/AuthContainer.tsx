import React from 'react';
import { useState } from 'react';
import { AuthFormTypes, LOGIN_TYPE } from './constants';
import { DataInputComponent } from './DataInputComponent';
import { LogHeader } from './LogHeader';

const HEADER_TEXT = "Организовывайте свои идеи подарков и мероприятий";

const Divider = () =>
  <div className="divider">
    <div className="line"/>
    <span className="middle-text"> Или </span>
    <div className="line"/>
  </div>

export const AuthContainer = () => {
  const [boxType, setBoxType] = useState<AuthFormTypes>(LOGIN_TYPE);
  
  return(
    <div className='auth-box'>
      <span className="cross">×</span>
      <div className='auth-container'>
        <div>
          <LogHeader header={HEADER_TEXT}/>
          <DataInputComponent type={boxType}/>
        </div>
        <Divider/>
        <div></div>
      </div>
    </div>
  )
}