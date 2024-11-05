import { ChangeEvent, MouseEvent, useState } from "react";
import TodoNameUI from "./TodoName.presenter";
import { ITodoNameProps } from "../../../commons/types/types";

export default function TodoName(props: ITodoNameProps) {
  const [name, setName] = useState<string>();
  const [isCompleted, setIsCompleted] = useState<boolean>();
  const [checkChanged, setCheckChanged] = useState<boolean>(false);

  const onClickCheck = (event: MouseEvent<HTMLInputElement>) => {
    const { checked } = event.target as HTMLInputElement;
    setIsCompleted(checked);
    setCheckChanged(true);
    // setIsTodoChanged(true);
  };

  const onChangeNameInput = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    // setIsTodoChanged(true);
  };
  return (
    <TodoNameUI
      item={props.item}
      onClickCheck={onClickCheck}
      onChangeNameInput={onChangeNameInput}
    />
  );
}
