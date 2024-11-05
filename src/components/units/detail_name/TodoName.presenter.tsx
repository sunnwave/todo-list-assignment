import { ITodoNameUIProps } from "../../../commons/types/types";
import * as N from "./TodoName.styles";

// 할 일 상세 페이지의 할 일 이름 컴포넌트
export default function TodoNameUI(props: ITodoNameUIProps) {
  return (
    <N.NameWrapper className={props.item?.isCompleted ? "done" : "todo"}>
      <N.TodoCheck
        type="checkbox"
        id="check"
        defaultChecked={props.item?.isCompleted}
        contentEditable
        onClick={props.onClickCheck}
      />
      <N.LabelForCheckbox htmlFor="check"></N.LabelForCheckbox>
      <N.NameInput
        defaultValue={props.item?.name}
        contentEditable
        onChange={props.onChangeNameInput}
      />
    </N.NameWrapper>
  );
}
