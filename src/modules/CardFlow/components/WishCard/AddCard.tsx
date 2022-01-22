import React from "react";
import { ReactComponent as Plus } from "../../../../assets/blackPlus.svg";

const ADD_TEXT = "ДОБАВИТЬ ЖЕЛАНИЕ";

export const AddCard = () => {
  return (
    <div className="wishcard-container">
      <div className="control-wrapper add-card">
        <Plus />
        <span>{ADD_TEXT}</span>
      </div>
    </div>
  );
};
// route + auth