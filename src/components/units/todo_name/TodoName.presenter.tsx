import { ITodoNameUIProps } from "../../../commons/types/types";
import * as N from "./TodoName.styles";

export default function TodoNameUI(props: ITodoNameUIProps) {
  return (
    <N.List className={props.item?.isCompleted ? "done" : "todo"}>
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
    </N.List>
  );
}
