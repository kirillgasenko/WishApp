import "./appearance.scss";

import { ReactComponent as UncoverIcon } from "../../assets/uncoverIcon.svg";

export const UserAppearance = function (props: {
  imgSource: string;
  email: string;
}) {
  const { imgSource, email } = props;

  return (
    <div className="user-appereance">
      <UncoverIcon />
      <img src={imgSource} className="avatar" alt="avatarClient" />
      <span>@{email}</span>
    </div>
  );
};
