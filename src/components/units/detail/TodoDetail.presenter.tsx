import * as D from "./TodoDetail.styles";
import { ITodoDetailUIProps } from "./TodoDetail.types";
import { prefix } from "../../../../next.config.mjs";

export default function TodoDetailUI(props: ITodoDetailUIProps) {
  return (
    <D.Wrapper>
      <D.List className={props.item?.isCompleted ? "done" : "todo"}>
        <D.TodoCheck
          type="checkbox"
          id="check"
          defaultChecked={props.item?.isCompleted}
          contentEditable
          onClick={props.onClickCheck}
        />
        <D.LabelForCheckbox htmlFor="check"></D.LabelForCheckbox>
        <D.NameInput
          defaultValue={props.item?.name}
          contentEditable
          onChange={props.onChangeNameInput}
        />
      </D.List>
      <D.ContentsWrapper>
        <D.Upload>
          <D.ImageInputLabel htmlFor="upload_img">
            <D.ImageEditIcon
              className={props.isNewImageUploaded ? "uploaded" : "none"}
            />
          </D.ImageInputLabel>
          <D.ImageInput
            type="file"
            accept="image/*"
            onChange={props.onChangeFile}
            id="upload_img"
          />
          <D.PreImg
            src={props.PreImageUrl?.toString()}
            className={
              props.isNewImageUploaded || props.item?.imageUrl
                ? "uploaded"
                : "none"
            }
          />
        </D.Upload>
        <D.Memo>
          <D.MemoLabel>Memo</D.MemoLabel>
          <D.MemoContents
            defaultValue={props.item?.memo}
            onChange={props.onChangeMemo}
          ></D.MemoContents>
        </D.Memo>
      </D.ContentsWrapper>
      <D.ButtonWrapper>
        <D.Button className="update" onClick={props.onClickEdit}>
          <D.ButtonIcon src="/todo-list-assignment/detail/check_icon.png" />
          수정 완료
        </D.Button>
        <D.Button className="delete" onClick={props.onClickDelete}>
          <D.ButtonIcon src="/todo-list-assignment/detail/delete_icon.png" />
          삭제하기
        </D.Button>
      </D.ButtonWrapper>
    </D.Wrapper>
  );
}
