import { ChangeEvent, MouseEvent } from "react";

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
