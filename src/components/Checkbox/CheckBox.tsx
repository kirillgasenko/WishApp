import "./checkBox.scss";

type Props = {
  name: string;
  handlerChangeCheckBox: (value: any, name: string) => void;
};

export const CheckBox = ({ name, handlerChangeCheckBox }: Props) => {
  return (
    <label className="customCheckbox">
      <input type="checkbox" onChange={(e) => handlerChangeCheckBox(e, name)} />
      <span className="spanCheckbox">{name}</span>
    </label>
  );
};
