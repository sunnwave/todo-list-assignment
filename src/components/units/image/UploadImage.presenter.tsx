import { IUploadImageUIProps } from "../../../commons/types/types";
import * as U from "./UploadImage.styles";

export default function UploadImageUI(props: IUploadImageUIProps) {
  return (
    <U.UploadWrapper>
      <U.ImageInputLabel htmlFor="upload_img">
        <U.ImageEditIcon
          className={
            props.localImg || props.item?.imageUrl ? "uploaded" : "none"
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
        className={props.localImg || props.item?.imageUrl ? "uploaded" : "none"}
      />
    </U.UploadWrapper>
  );
}
