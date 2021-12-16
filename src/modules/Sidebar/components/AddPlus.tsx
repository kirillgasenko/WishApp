import React from "react";
import { useState } from "react";
import "./addPlus.scss";
import { ReactComponent as Plus } from "../../../assets/plus.svg";
import giftlogo from "../../../assets/giftlogo.svg";
import folderlogo from "../../../assets/folderlogo.svg";
import calendarlogo from "../../../assets/calendarlogo.svg";

const EllipseOption: React.FC<{ icon?: string; text?: string }> = ({
  icon,
  text,
}) => {
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
          <div style={{ position: "relative", top: "-200px", right: "-5px" }}>
            <EllipseOption icon={giftlogo} text="ЖЕЛАНИЕ" />
          </div>
          <div style={{ position: "relative", top: "-225px", right: "-100px" }}>
            <EllipseOption icon={folderlogo} text="ДОСКУ" />
          </div>
          <div style={{ position: "relative", top: "-195px", right: "-90px" }}>
            <EllipseOption icon={calendarlogo} text="СОБЫТИЕ" />
          </div>
        </div>
      )}
    </>
  );
}
