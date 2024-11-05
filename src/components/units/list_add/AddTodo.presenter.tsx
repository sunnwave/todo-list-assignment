import { IAddTodoUIProps } from "../../../commons/types/types";
import * as A from "./AddTodo.styles";

//할 일 등록 컴포넌트
export default function AddTodoUI(props: IAddTodoUIProps) {
  return (
    <A.AddWrapper>
      <A.AddTodo
        placeholder="할 일을 입력해주세요"
        onChange={props.onChangeAddTodo}
        onKeyDown={props.onKeyDownAddTodo}
      />
      {props.totalLists?.length === 0 ? (
        <A.AddButton
          className="empty"
          onClick={props.onClickAddButton}
        ></A.AddButton>
      ) : (
        <A.AddButton onClick={props.onClickAddButton}></A.AddButton>
      )}
    </A.AddWrapper>
  );
}
