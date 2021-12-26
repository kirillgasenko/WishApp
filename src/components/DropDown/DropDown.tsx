import "./dropDown.scss";

export const DropDown = () => {
  return (
    <div className="select">
      <select>
        <option value="Лимон" className="options">
          Лимон
        </option>
        <option value="Банан" className="options">
          Банан
        </option>
        <option value="Яблоко" className="options">
          Яблоко
        </option>
      </select>
    </div>
  );
};
