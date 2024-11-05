import { ChangeEvent, KeyboardEvent, MouseEvent } from "react";

export interface Ilist {
  name: string;
  id: number;
  isCompleted: boolean;
}

export interface IItem {
  id: number;
  tenantId: string;
  name: string;
  memo?: string;
  imageUrl?: string;
  isCompleted: boolean;
}

export interface Ivariables {
  name?: string;
  memo?: string;
  imageUrl?: string;
  isCompleted?: boolean;
}

export interface IAddTodoProps {
  totalLists: Ilist[];
}

export interface IAddTodoUIProps {
  totalLists: Ilist[];
  onChangeAddTodo: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDownAddTodo: (event: KeyboardEvent<HTMLInputElement>) => void;
  onClickAddButton: (event: MouseEvent<HTMLDivElement>) => void;
}

export interface ITodoDetailUIProps {
  item?: IItem;
  onClickCheck: (event: MouseEvent<HTMLInputElement>) => void;
  onChangeNameInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeMemo: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickEdit: (event: MouseEvent<HTMLButtonElement>) => void;
  PreImageUrl: string | ArrayBuffer | null;
  isNewImageUploaded: boolean;
  isTodoChanged: boolean;
}

export interface ITodoListUIProps {
  totalLists: Ilist[];
  // onChangeAddTodo: (event: ChangeEvent<HTMLInputElement>) => void;
  // onKeyDownAddTodo: (event: KeyboardEvent<HTMLInputElement>) => void;
  // onClickAddButton: (event: MouseEvent<HTMLDivElement>) => void;
  onClickList: (
    event: MouseEvent<HTMLDivElement> | MouseEvent<HTMLLabelElement>
  ) => void;
  onChangeCheck: (event: ChangeEvent<HTMLInputElement>, key: string) => void;
  onClickCheck: (
    event: MouseEvent<HTMLDivElement>,
    isCompleted: boolean
  ) => void;
}
