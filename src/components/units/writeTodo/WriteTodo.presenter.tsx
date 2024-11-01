import { ChangeEvent, MouseEvent } from "react";

interface IWriteTodoUIProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function WriteTodoUI(props: IWriteTodoUIProps) {
  return (
    <>
      <input onChange={props.onChange} />
      <button onClick={props.onClick}>+ 추가하기</button>
    </>
  );
}
