import * as D from "./TodoDetail.styles";
import TodoNameUI from "../todo_name/TodoName.presenter";
import UploadImageUI from "../image/UploadImage.presenter";
import MemoUI from "../memo/Memo.presenter";
import { ITodoDetailUIProps } from "../../../commons/types/types";

export default function TodoDetailUI(props: ITodoDetailUIProps) {
  return (
    <D.Wrapper>
      {/* 항목 이름 컴포넌트 */}
      <TodoNameUI
        item={props.item}
        onClickCheck={props.onClickCheck}
        onChangeNameInput={props.onChangeNameInput}
      />
      <D.ContentsWrapper>
        {/* 이미지 업로드 컴포넌트 */}
        <UploadImageUI
          item={props.item}
          onChangeFile={props.onChangeFile}
          PreImageUrl={props.PreImageUrl}
          localImg={props.localImg}
        />
        {/* 메모 컴포넌트 */}
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
