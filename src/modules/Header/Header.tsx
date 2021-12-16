import React from "react";
import "./header.scss";
import { ReactComponent as CircledQuestion } from "../../assets/circledQuestion.svg";
import { ReactComponent as DoorbellIcon } from "../../assets/doorbellIcon.svg";
import { ReactComponent as ShareIcon } from "../../assets/shareIcon.svg";
import exampleUserAvatar from "../../assets/exampleUserAvatar.png";

import { UserAppearance } from "../UserAppearance/UserAppearance";

const SEARCH_PLACEHOLDER = "Search";

export const Header = function () {
  return (
    <div className="header-wrapper">
      <div className="search-container">
        <input className="search-input" placeholder={SEARCH_PLACEHOLDER} />
      </div>
      <div className="user-container">
        <UserAppearance
          imgSource={exampleUserAvatar}
        />
        <div className="icon-row">
          <CircledQuestion />
          <DoorbellIcon />
          <ShareIcon />
        </div>
      </div>
    </div>
  );
};
