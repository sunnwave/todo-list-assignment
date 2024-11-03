import * as D from "./TodoDetail.styles";
import { ITodoDetailUIProps } from "./TodoDetail.types";

export default function TodoDetailUI(props: ITodoDetailUIProps) {
  return (
    <D.Wrapper>
      <D.List className={props.item?.isCompleted ? "done" : "todo"}>
        <D.TodoCheck
          type="checkbox"
          id="check"
          defaultChecked={props.item?.isCompleted}
          contentEditable
          onChange={props.onChangeCheck}
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
          <D.ImageInputLabel htmlFor="upload_img">여기여기</D.ImageInputLabel>
          <D.ImageInput
            type="file"
            accept="image/*"
            onChange={props.onChangeFile}
            id="upload_img"
          />
          <img src={props.imageUrl?.toString()} className="preimg" />
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
          <D.ButtonIcon src="/detail/check_icon.png" />
          수정 완료
        </D.Button>
        <D.Button className="delete" onClick={props.onClickDelete}>
          <D.ButtonIcon src="/detail/delete_icon.png" />
          삭제하기
        </D.Button>
      </D.ButtonWrapper>
    </D.Wrapper>
  );
}
