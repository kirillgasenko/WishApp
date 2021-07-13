import React from "react";

import { ReactComponent as HeadSVG } from '../../assets/IGY2rows.svg';

const HEADER_TEXT = "Организовывайте свои идеи подарков и мероприятий";

export const LogHeader = ({ header, additional }: { header: string, additional?: string }) => {
  return(
    <div className="header-container">
      <HeadSVG className="header-logo"/>
      <h4>{header}</h4>
      <h5>{additional}</h5>
    </div>
  );
}
