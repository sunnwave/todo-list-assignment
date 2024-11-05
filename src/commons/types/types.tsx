import { ChangeEvent, KeyboardEvent, MouseEvent } from "react";

export interface IHeaderUIProps {
  onClickLogo: () => void;
}

export interface IItem {
  id: number;
  tenantId?: string;
  name: string;
  memo?: string;
  imageUrl?: string;
  isCompleted: boolean;
}

//////Todo List///////
export interface ITodoListUIProps {
  totalLists: IItem[];
}

export interface IEmptyUIProps {
  isCompleted: boolean;
}

export interface IItemUIProps {
  item: IItem;
  onClickCheck: (
    event: MouseEvent<HTMLDivElement>,
    isCompleted: boolean
  ) => void;
  onClickItem: (
    event: MouseEvent<HTMLDivElement> | MouseEvent<HTMLLabelElement>
  ) => void;
}

export interface IItemProps {
  item: IItem;
}

////Add Todo///////
export interface IAddTodoProps {
  totalLists: IItem[];
}

export interface IAddTodoUIProps {
  totalLists: IItem[];
  onChangeAddTodo: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDownAddTodo: (event: KeyboardEvent<HTMLInputElement>) => void;
  onClickAddButton: (event: MouseEvent<HTMLDivElement>) => void;
}

////////Todo Detail
export interface ITodoDetailUIProps {
  item?: IItem;
  onClickCheck: (event: MouseEvent<HTMLInputElement>) => void;
  onChangeNameInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeMemo: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickEdit: (event: MouseEvent<HTMLButtonElement>) => void;
  PreImageUrl: string | ArrayBuffer | null;
  localImg: File | undefined;
  isTodoChanged: boolean;
}

export interface ITodoNameUIProps {
  item: IItem | undefined;
  onClickCheck: (event: MouseEvent<HTMLInputElement>) => void;
  onChangeNameInput: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface IUploadImageUIProps {
  item: IItem | undefined;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
  PreImageUrl: string | ArrayBuffer | null;
  localImg: File | undefined;
}

export interface IMemoUIProps {
  item: IItem | undefined;
  onChangeMemo: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface Ivariables {
  name?: string;
  memo?: string;
  imageUrl?: string;
  isCompleted?: boolean;
}
