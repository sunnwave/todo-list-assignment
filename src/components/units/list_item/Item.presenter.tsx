import { IItemUIProps } from "../../../commons/types/types";
import * as I from "./Item.styles";

export default function ItemUI(props: IItemUIProps) {
  return (
    <I.List
      className={props.item.isCompleted ? "done" : "todo"}
      id={String(props.item?.id)}
    >
      <I.TodoCheck
        className={props.item.isCompleted ? "done" : "todo"}
        onClick={(e) => props.onClickCheck(e, props.item?.isCompleted)}
        id={String(props.item?.id)}
      ></I.TodoCheck>
      <I.Label
        className={props.item.isCompleted ? "done" : "todo"}
        onClick={props.onClickItem}
        id={String(props.item?.id)}
      >
        {props.item?.name}
      </I.Label>
    </I.List>
  );
}
