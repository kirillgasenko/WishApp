import React from "react";
import { ReactComponent as CloverImg }from '../../assets/clover.svg'
import { ReactComponent as TextImg }from '../../assets/igiftyou.svg'
import './sideheader.scss';

export const SidebarHeader = () => {
  return(
    <div className="header">
      <CloverImg className="clover"/><TextImg/>
    </div>
  );
};