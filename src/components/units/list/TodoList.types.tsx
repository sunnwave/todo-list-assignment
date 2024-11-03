import { ChangeEvent, KeyboardEvent, MouseEvent } from "react";

export interface Ilist {
  name: string;
  id: number;
  isCompleted: boolean;
}

export interface ITodoListUIProps {
  totalLists: Ilist[];
  onChangeAddTodo: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDownAddTodo: (event: KeyboardEvent<HTMLInputElement>) => void;
  onClickAddButton: (event: MouseEvent<HTMLDivElement>) => void;
  onClickList: (
    event: MouseEvent<HTMLDivElement> | MouseEvent<HTMLLabelElement>
  ) => void;
  onChangeCheck: (event: ChangeEvent<HTMLInputElement>, key: string) => void;
  onClickCheck: (
    event: MouseEvent<HTMLDivElement>,
    isCompleted: boolean
  ) => void;
  // onClickTodoToDone: (event: MouseEvent<HTMLDivElement>) => void;
  // onClickDoneToTodo: (event: MouseEvent<HTMLDivElement>) => void;
}
