import React from "react";
import { Image } from "react-bootstrap";
import './appearance.scss';

import { ReactComponent as UncoverIcon }from '../../assets/uncoverIcon.svg';

export const UserAppearance = function(props: {img: string, email: string}) {
  let { img, email } = props;

  return(
    <div className="user-appereance">
      <UncoverIcon/>
      <Image src={img} roundedCircle className="avatar"/>
      <span>@{email}</span>
    </div>
  );
};