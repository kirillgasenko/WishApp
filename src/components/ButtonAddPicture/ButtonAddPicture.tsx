import AddImage from "../../assets/addImage.svg";
import "./buttonAddPicture.scss";

type Props = {
  handlerSendPicture: any;
  preview: any;
  selectedFile: any;
};

export const ButtonAddPicture = ({
  handlerSendPicture,
  preview,
  selectedFile,
}: Props) => {
  return (
    <>
      <input
        accept="image/*"
        style={{ display: "none" }}
        id="raised-button-file"
        multiple
        type="file"
        onChange={handlerSendPicture}
      />
      <label htmlFor="raised-button-file">
        {selectedFile ? (
          <>
            <div className="previewImage">
              <img src={preview} />
              <div className="previewimageEffect" />
              <div className="addImageText">
                <img src={AddImage} alt="AddImage" />
                <span className="descriptionImage">
                  Перетащите изображение сюда или нажмите{" "}
                </span>
              </div>
            </div>
          </>
        ) : (
          <div className="addImage">
            <div className="addImageText">
              <img src={AddImage} alt="AddImage" />
              <span className="descriptionImage">
                Перетащите изображение сюда или нажмите{" "}
              </span>
            </div>
          </div>
        )}
      </label>
    </>
  );
};
