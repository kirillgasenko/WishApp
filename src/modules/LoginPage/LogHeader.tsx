import React from "react";

import { ReactComponent as HeadSVG } from '../../assets/IGY2rows.svg';

const HEADER_TEXT = "Организовывайте свои идеи подарков и мероприятий";

export const LogHeader = ({ header, additional }: { header: string, additional?: string }) => {
  return(
    <div className="header-container">
      <HeadSVG className="header-logo"/>
      <h3>{header}</h3>
      <h4>{additional}</h4>
    </div>
  );
}
