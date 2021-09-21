import React from "react";

import { ReactComponent as HeadSVG } from '../../assets/IGY2rows.svg';

export const LogHeader = ({ header, additional }: { header: string, additional?: string }) => {
  return(
    <div className="header-container">
      <HeadSVG className="header-logo"/>
      <h4>{header}</h4>
      {additional && 
        <>
          <span className="additional">{additional}</span>
        </>
      }
    </div>
  );
}
