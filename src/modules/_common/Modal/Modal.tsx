import React, { memo, useMemo } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import "./modal.scss";

function closureAddRemoveModal(): [Element, Function] {
  let created: boolean = false;
  const div = document.createElement("div");
  div.setAttribute("id", `modal ${Date.now().toString()}`);

  return [
    div,
    (toRemove?: boolean) => {
      if (toRemove) {
        div.remove();
      }

      if (!created) {
        document.getElementById("root")?.appendChild(div);
        created = true;
      }
    },
  ];
}

type ModalProps = {
  toShow?: boolean;
  handleBlur?: Function;
  children?: JSX.Element;
  content: JSX.Element;
};
// TODO: add default close button and ok button
function Modal({ toShow, children, content }: ModalProps): JSX.Element | null {
  const [elem, addRemoveModal] = useMemo(closureAddRemoveModal, []);
  const [isToShow, setIsToShow] = useState(!!toShow);
  const elemRef = useRef<Element>(elem);

  useEffect(() => {
    setIsToShow(!!toShow);
  }, [toShow]);

  useEffect(() => {
    addRemoveModal();

    return () => addRemoveModal(true);
  }, []);

  function handleShow() {
    setIsToShow(true);
  }

  function handleClose() {
    setIsToShow(false);
  }

  return (
    <>
      <div onClick={handleShow}>{children}</div>
      {isToShow &&
        ReactDOM.createPortal(
          <div className="modal">
            <div className="modal-mask" onClick={handleClose} />
            <div className="modal-content-container">
              {content}
            </div>
          </div>,
          elemRef.current
        )}
    </>
  );
}

export default memo(Modal);
