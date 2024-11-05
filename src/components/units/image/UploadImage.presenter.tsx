import { IUploadImageUIProps } from "../../../commons/types/types";
import { ITodoDetailUIProps } from "../detail/TodoDetail.types";
import * as U from "./UploadImage.styles";

export default function UploadImageUI(props: IUploadImageUIProps) {
  return (
    <U.Upload>
      <U.ImageInputLabel htmlFor="upload_img">
        <U.ImageEditIcon
          className={
            props.isNewImageUploaded || props.item?.imageUrl
              ? "uploaded"
              : "none"
          }
        />
      </U.ImageInputLabel>
      <U.ImageInput
        type="file"
        accept="image/*"
        onChange={props.onChangeFile}
        id="upload_img"
      />
      <U.PreImg
        src={props.PreImageUrl?.toString()}
        className={
          props.isNewImageUploaded || props.item?.imageUrl ? "uploaded" : "none"
        }
      />
    </U.Upload>
  );
}
