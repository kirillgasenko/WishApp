import "./linkInput.scss";
import linkSearch from "../../assets/linkSearch.svg";
import { ChangeEvent } from "react";

type Props = {
  handlerFindGift: () => void;
  handlerChangeInput: (value: ChangeEvent<HTMLInputElement>) => void;
};

export const LinkInput = ({
  handlerFindGift,
  handlerChangeInput,
}: Props) => {
  return (
    <div className="wrapperLinkInput">
      <input
        type="text"
        className="linkInput"
        placeholder="Ссылка"
        onChange={handlerChangeInput}
      />
      <button onClick={handlerFindGift} className="searchLink">
        <img src={linkSearch} alt="searchLink" />
      </button>
    </div>
  );
};
