import "./checkBox.scss";

type Props = {
  currencyRadioValue?: string;
  currencyInputValue: any;
  handlerChangeCurrency: any;
  handlerChangeRadioButton: any;
};

export const CheckBoxCurrency = ({
  currencyRadioValue,
  currencyInputValue,
  handlerChangeCurrency,
  handlerChangeRadioButton,
}: Props) => {
  return (
    <div className="wrapperCurrency">
      <input
        type="text"
        className="priceInput"
        value={currencyInputValue}
        onChange={handlerChangeCurrency}
        placeholder="Цена"
      />
      <div className="wrapperInnerCurrency">
        <label className="my-custom-label">
          <input
            name="test"
            onChange={(element) => handlerChangeRadioButton(element, "usd")}
            type="radio"
            checked={currencyRadioValue === "usd"}
          />
          <span>$</span>
        </label>
        <label className="my-custom-label">
          <input
            name="test"
            onChange={(element) => handlerChangeRadioButton(element, "rub")}
            type="radio"
            checked={currencyRadioValue === "rub"}
          />
          <span>₽</span>
        </label>
      </div>
    </div>
  );
};
