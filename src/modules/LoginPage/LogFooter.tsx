import React from "react";
import "./authPage.scss";
import { Button } from "./components/Button";
import vkLogo from "../../assets/vkLogo.svg";
import googleLogo from "../../assets/googleLogo.svg";
import facebLogo from "../../assets/facebLogo.svg";

export const LogFooter = () => {
  return (
    <div className="buttons-container">
      <Button icon={vkLogo}>ПРОДОЛЖИТЬ С ВКОНТАКТЕ</Button>
      <Button icon={googleLogo}>ПРОДОЛЖИТЬ С GOOGLE</Button>
      <Button icon={facebLogo}>ПРОДОЛЖИТЬ С FACEBOOK</Button>
    </div>
  );
};
