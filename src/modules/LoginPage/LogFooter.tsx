import React from "react";
import './authPage.scss';
import { Button } from './components/Button';

export const LogFooter = () => {
  return(
    <div className="buttons-container">
      <Button>ПРОДОЛЖИТЬ С ВКОНТАКТЕ</Button>
      <Button>ПРОДОЛЖИТЬ С GOOGLE</Button>
      <Button>ПРОДОЛЖИТЬ С FACEBOOK</Button>
    </div>
  );
}
