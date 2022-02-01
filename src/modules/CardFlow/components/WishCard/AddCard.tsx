import React, { useState } from "react";
import { ReactComponent as Plus } from "../../../../assets/blackPlus.svg";
import { ModalCreateWish } from "../../../../components/Modal/ModalCreateWish";
import Modal from "../../../_common/Modal";

const ADD_TEXT = "ДОБАВИТЬ ЖЕЛАНИЕ";

export const AddCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handlerOpenModal = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="wishcard-container" onClick={handlerOpenModal}>
        <div className="control-wrapper add-card">
          <Plus />
          <span>{ADD_TEXT}</span>
        </div>
      </div>
      {isOpen && <Modal content={<ModalCreateWish />} toShow={true} />}
    </>
  );
};
// route + auth
