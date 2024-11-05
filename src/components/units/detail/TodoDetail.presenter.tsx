import * as D from "./TodoDetail.styles";
import { ITodoDetailUIProps } from "./TodoDetail.types";
import { prefix } from "../../../../next.config.mjs";
import TodoName from "../todo_name/TodoName.container";
import TodoNameUI from "../todo_name/TodoName.presenter";
import UploadImageUI from "../image/UploadImage.presenter";
import MemoUI from "../memo/Memo.presenter";

export default function TodoDetailUI(props: ITodoDetailUIProps) {
  return (
    <D.Wrapper>
      <TodoNameUI
        item={props.item}
        onClickCheck={props.onClickCheck}
        onChangeNameInput={props.onChangeNameInput}
      />
      <D.ContentsWrapper>
        <UploadImageUI
          item={props.item}
          onChangeFile={props.onChangeFile}
          PreImageUrl={props.PreImageUrl}
          isNewImageUploaded={props.isNewImageUploaded}
        />
        <MemoUI item={props.item} onChangeMemo={props.onChangeMemo} />
      </D.ContentsWrapper>
      <D.ButtonWrapper>
        <D.Button
          id="update"
          className={props.isTodoChanged ? "active" : ""}
          onClick={props.onClickEdit}
        >
          <D.ButtonIcon src="/todo-list-assignment/detail/check_icon.png" />
          수정 완료
        </D.Button>
        <D.Button id="delete" onClick={props.onClickDelete}>
          <D.ButtonIcon src="/todo-list-assignment/detail/delete_icon.png" />
          삭제하기
        </D.Button>
      </D.ButtonWrapper>
    </D.Wrapper>
  );
}
