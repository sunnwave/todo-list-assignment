import { IEmptyUIProps } from "../../../commons/types/types";
import * as E from "./Empty.styles";

export default function EmptyUI(props: IEmptyUIProps) {
  return (
    <E.EmptyWrapper>
      <E.EmptyImg
        src={
          props.isCompleted
            ? "/todo-list-assignment/list/done_char.png"
            : "/todo-list-assignment/list/todo_char.png"
        }
      />
      <E.EmptyLabel>
        {props.isCompleted
          ? "아직 다 한 일이 없어요.\n해야 할 일을 체크해보세요!"
          : "할 일이 없어요.\nTODO를 새롭게 추가해주세요!"}
      </E.EmptyLabel>
    </E.EmptyWrapper>
  );
}
