import React from "react";
import { useState } from "react";
import "./addPlus.scss";
import { ReactComponent as Plus } from "../../../assets/plus.svg";
import giftlogo from "../../../assets/giftlogo.svg";
import folderlogo from "../../../assets/folderlogo.svg";
import calendarlogo from "../../../assets/calendarlogo.svg";

type EllipseProps = {
  icon?: string;
  text?: string;
};

const EllipseOption = ({
  icon,
  text,
}: EllipseProps) => {
  return (
    <button className="option-button">
      <img className="icon" src={icon} />
      <span>{text}</span>
    </button>
  );
};

export default function AddPlus() {
  const [opened, setOpened] = useState(false);

  function handleOpen() {
    setOpened(!opened);
  }

  return (
    <>
      <div
        onClick={handleOpen}
        className={`add-button ${opened ? "opened" : "closed"}`}
      >
        <Plus />
      </div>
      {opened && (
        <div>
          <div className='upper-item'>
            <EllipseOption icon={giftlogo} text="ЖЕЛАНИЕ" />
          </div>
          <div className='middle-item'>
            <EllipseOption icon={folderlogo} text="ДОСКУ" />
          </div>
          <div className='lower-item'>
            <EllipseOption icon={calendarlogo} text="СОБЫТИЕ" />
          </div>
        </div>
      )}
    </>
  );
}
