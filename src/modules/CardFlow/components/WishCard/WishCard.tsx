import React from "react";
import wishPlug from "../../../../assets/wishPlug.svg";
import "./wishCardStyles.scss";

function repeatChar(char: string, repeats: number) {
  let str = "";

  for (let i = 0; i < repeats; i++) {
    str += char;
  }

  return str;
}

const MAX_NAME_LENGTH = 26;

export const WishCard = (props: {
  imgSrc?: string;
  costLevel: number;
  name: string;
}) => {
  const { imgSrc, costLevel, name } = props;
  const editedName =
    name.length < MAX_NAME_LENGTH ? name.slice(0, MAX_NAME_LENGTH) : name;
  const costStr = repeatChar("$", costLevel);

  return (
    <div className="wishcard-container">
      <div className="control-wrapper">
        <img
          src={imgSrc ?? wishPlug}
          alt="wish card"
          className={imgSrc ? "card-image" : "default-card-image"}
        />
        <text className="cost-level">{costStr}</text>
      </div>
      <text className="card-description">{editedName}</text>
    </div>
  );
};
