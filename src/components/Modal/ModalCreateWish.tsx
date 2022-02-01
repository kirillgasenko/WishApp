import "./modal.scss";
import { CheckBox } from "../Checkbox/CheckBox";
import Close from "../../assets/close.svg";
import GreenAddImage from "../../assets/greenAddButton.svg";
import { TextArea } from "../TextArea/TextArea";
import { DropDown } from "../DropDown/DropDown";
import { Button } from "../../modules/LoginPage/components/Button";
import styled from "styled-components";
import { LinkInput } from "../LinkInput/LinkInput";
import { CheckBoxCurrency } from "../Checkbox/CheckBoxCurrency";
import { ButtonAddPicture } from "../ButtonAddPicture/ButtonAddPicture";

import { useHookModal } from "./hooks/useHookModal";
import { NameField } from "./constants/constants";

export const ButtonWrapper = styled(Button)`
  width: 296px;
  text-align: center;
`;

export const ModalCreateWish = () => {
  const { values, handlers } = useHookModal();
  const {
    preview,
    selectedFile,
    visibleText,
    titleWish,
    currencyInputValue,
    currencyRadioValue,
  } = values;
  const {
    handlerSendPicture,
    handlerTitleWish,
    handlerFocusTextArea,
    handlerBlurTextArea,
    handlerFindGift,
    handlerChangeInput,
    handlerChangeCurrency,
    handlerChangeRadioButton,
    handlerCreateWish,
    handlerSubmitModal,
    handlerChangeCheckBox,
  } = handlers;

  return (
    <form onSubmit={handlerSubmitModal}>
      <div className="modal">
        <div className="wrapperHaderModal">
          <div className="groupCheckBox">
            <div className="wrapperCheckBox">
              <CheckBox
                name={NameField.private}
                handlerChangeCheckBox={handlerChangeCheckBox}
              />
            </div>
            <div className="wrapperCheckBox">
              <CheckBox
                name={NameField.analog}
                handlerChangeCheckBox={handlerChangeCheckBox}
              />
            </div>
            <div>
              <CheckBox
                name={NameField.buyAlone}
                handlerChangeCheckBox={handlerChangeCheckBox}
              />
            </div>
          </div>
          <div className="closeButton">
            <img src={Close} alt="Close" />
          </div>
        </div>
        <div className="mainContentModal">
          <div className="leftBlockContent">
            <ButtonAddPicture
              handlerSendPicture={handlerSendPicture}
              preview={preview}
              selectedFile={selectedFile}
            />
            <button className="greenButton">
              <img src={GreenAddImage} alt="Choose board" />
              <span className="chooseBoard">Выбрать доски</span>
            </button>
          </div>
          <div className="rightlockContent">
            <TextArea
              showText
              visibleText={visibleText}
              titleWish={titleWish}
              handlerTitleWish={handlerTitleWish}
              handlerFocusTextArea={handlerFocusTextArea}
              handlerBlurTextArea={handlerBlurTextArea}
            />
            <TextArea
              placeholder="Введите детали, размер, цвет"
              handlerTitleWish={handlerTitleWish}
            />
            <div className="wrapperPrice">
              <DropDown />
              <CheckBoxCurrency
                currencyRadioValue={currencyRadioValue}
                currencyInputValue={currencyInputValue}
                handlerChangeCurrency={handlerChangeCurrency}
                handlerChangeRadioButton={handlerChangeRadioButton}
              />
            </div>
            <LinkInput
              handlerFindGift={handlerFindGift}
              handlerChangeInput={handlerChangeInput}
            />
          </div>
        </div>
        <div className="buttons">
          <ButtonWrapper children={<span>ОТМЕНА</span>} />
          <ButtonWrapper
            type="submit"
            onClick={handlerCreateWish}
            children={<span>СОЗДАТЬ ЖЕЛАНИЕ</span>}
            disabled={false}
          />
        </div>
      </div>
    </form>
  );
};
