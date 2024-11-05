import { ChangeEvent, KeyboardEvent, MouseEvent, useState } from "react";
import AddTodoUI from "./AddTodo.presenter";
import { BASE_URL } from "../../../commons/api/api";
import axios from "axios";
import { IAddTodoProps } from "../../../commons/types/types";

export default function AddTodo(props: IAddTodoProps) {
  const [addTodo, setAddTodo] = useState("");

  //할 일 입력 창 입력 감지
  const onChangeAddTodo = (event: ChangeEvent<HTMLInputElement>) => {
    setAddTodo(event.target.value);
  };

  //엔터키를 이용해 할 일 등록
  const onKeyDownAddTodo = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (!addTodo) {
        alert("입력창에 할 일을 입력해주세요");
      } else {
        const data = {
          name: addTodo,
        };
        axios.post(BASE_URL, data).then((res) => {
          event.stopPropagation();
          alert("새로운 할 일이 등록되었습니다.");
          location.reload();
        });
      }
    }
  };

  //추가하기 버튼을 이용해 할 일 등록
  const onClickAddButton = (event: MouseEvent<HTMLDivElement>) => {
    if (!addTodo) {
      alert("입력창에 할 일을 입력해주세요");
    } else {
      const data = {
        name: addTodo,
      };
      axios.post(BASE_URL, data).then((res) => {
        alert("새로운 할 일이 등록되었습니다.");
        location.reload();
      });
    }
  };
  return (
    <AddTodoUI
      totalLists={props.totalLists}
      onChangeAddTodo={onChangeAddTodo}
      onKeyDownAddTodo={onKeyDownAddTodo}
      onClickAddButton={onClickAddButton}
    />
  );
}
