import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ApiNameFiled } from "../constants/constants";
import { getUniqueWishes, postUniqueWishes } from "../redux/middleware";
import { receivedDate } from "../redux/reducer";
import { useWish } from "../redux/selectors";

export const useHookModal = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState<string>();
  const [titleWish, setTitleWish] = useState<any>();
  const [inputValue, setInputValue] = useState<string>();
  const [visibleText, setVisibleText] = useState(false);
  const [currencyInputValue, setCurrencyInputValue] = useState<any>();
  const [currencyRadioValue, setCurrencyRadioValue] = useState<string>();
  const [formValues, setFormValues] = useState<any>();
  const [checkBoxvalues, setCheckBoxValues] = useState<{
    [key: string]: boolean;
  }>();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const handlerSendPicture = (e: any) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile((prevValue) => prevValue);
      return;
    }

    setSelectedFile(e.target.files[0]);
  };

  const handlerTitleWish = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    placeholder?: string
  ) =>
    setTitleWish((prevValue: any) => ({
      title: !placeholder ? event.target.value : prevValue?.title,
      describe: !!placeholder ? event.target.value : prevValue?.describe,
    }));

  const handlerFocusTextArea = () => setVisibleText(true);

  const handlerBlurTextArea = () => setVisibleText(false);

  const handlerFindGift = () => window.open(inputValue);

  const handlerChangeInput = (value: ChangeEvent<HTMLInputElement>) =>
    setInputValue(value.target.value);

  const handlerChangeCurrency = (value: any) =>
    setCurrencyInputValue(value.target.value.replace(/\D/, ""));

  const handlerChangeRadioButton = (element: any, currency: string) =>
    setCurrencyRadioValue(currency);

  const handlerChangeCheckBox = (value: any, name: string) =>
    setCheckBoxValues((prevValue) => ({
      ...prevValue,
      [ApiNameFiled[name]]: value.target.checked,
    }));

  const handlerCreateWish = () =>
    setFormValues({
      ...checkBoxvalues,
      name: titleWish?.title,
      lastModifiedDate: new Date().getTime(),
      details: titleWish?.describe,
      image: {
        content: selectedFile,
      },
      link: inputValue,
      price: {
        currencyCode: currencyRadioValue === "usd" ? 1 : 0,
        value: currencyInputValue,
      },
    });

  const handlerSubmitModal = (event: any) => {
    event.preventDefault();
    console.log(formValues);
    dispatch(postUniqueWishes(formValues));
  };

  return {
    values: {
      preview,
      selectedFile,
      visibleText,
      titleWish,
      inputValue,
      currencyInputValue,
      currencyRadioValue,
    },
    handlers: {
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
    },
  };
};
