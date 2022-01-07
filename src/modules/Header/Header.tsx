import React from "react";
import "./header.scss";

import { ReactComponent as MyWishesImage } from "../../assets/myWishes.svg";
import { ReactComponent as SearchIcon } from "../../assets/searchIcon.svg";
import { ReactComponent as DoorbellIcon } from "../../assets/doorbellIcon.svg";
import { ReactComponent as ShareIcon } from "../../assets/shareIcon.svg";
import exampleUserAvatar from "../../assets/exampleUserAvatar.png";

import { UserAppearance } from "../UserAppearance/UserAppearance";

const SEARCH_PLACEHOLDER = "Поиск";

export const Header = function () {
  return (
    <div className="header-wrapper">
      <MyWishesImage className="my-wishes" />
      <div className="search-container">
        <SearchIcon className="search-icon" />
        <input className="search-input" placeholder={SEARCH_PLACEHOLDER} />
      </div>
      <UserAppearance
        imgSource={exampleUserAvatar}
        email="kingvaneternal@gmail.com"
      />
      <div className="icon-row">
        <SearchIcon />
        <DoorbellIcon />
        <ShareIcon />
      </div>
    </div>
  );
};
