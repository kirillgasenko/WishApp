import "./textArea.scss";

type Props = {
  showText?: boolean;
  placeholder?: string;
  titleWish?: string;
  visibleText?: boolean;
  handlerTitleWish: (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    placeholder?: string
  ) => void;
  handlerFocusTextArea?: () => void;
  handlerBlurTextArea?: () => void;
};

export const TextArea = ({
  showText,
  visibleText,
  titleWish,
  placeholder,
  handlerTitleWish,
  handlerFocusTextArea,
  handlerBlurTextArea,
}: Props) => {
  return (
    <div className="wrapperTextArea">
      <textarea
        className="textArea"
        maxLength={100}
        onChange={(value) => handlerTitleWish(value, placeholder)}
        onFocus={handlerFocusTextArea}
        onBlur={handlerBlurTextArea}
        placeholder={placeholder}
      />
      {visibleText && showText && (
        <div className="descriptionTextArea">
          <span>В профиле отображаются первые 60 знаков</span>
          <span>{titleWish?.length} из 100</span>
        </div>
      )}
    </div>
  );
};
