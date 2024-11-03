import { ChangeEvent, MouseEvent } from "react";

export interface IItem {
  id: number;
  tenantId: string;
  name: string;
  memo?: string;
  imageUrl?: string;
  isCompleted: boolean;
}

export interface ITodoDetailUIProps {
  item?: IItem;
  onClickCheck: (event: MouseEvent<HTMLInputElement>) => void;
  onChangeNameInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeMemo: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  imageUrl: string | ArrayBuffer | null;
  isImageUploaded: boolean;
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickEdit: (event: MouseEvent<HTMLButtonElement>) => void;
}
