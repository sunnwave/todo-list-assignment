import TodoListUI from "./TodoList.presenter";
import axios from "axios";
import {
  ChangeEvent,
  KeyboardEvent,
  MouseEvent,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/router";
import { Ilist } from "../../../commons/types/types";
import { BASE_URL } from "../../../commons/api/api";
import AddTodo from "../add/AddTodo.container";

export default function TodoList() {
  const [totalLists, setTotalLists] = useState<Ilist[]>([]);
  // const [addTodo, setAddTodo] = useState("");
  const router = useRouter();

  useEffect(() => {
    axios.get(BASE_URL).then((res) => {
      setTotalLists(res.data);
    });
  }, []);

  // const onChangeAddTodo = (event: ChangeEvent<HTMLInputElement>) => {
  //   setAddTodo(event.target.value);
  // };

  // const onKeyDownAddTodo = (event: KeyboardEvent<HTMLInputElement>) => {
  //   if (event.key === "Enter") {
  //     if (!addTodo) {
  //       alert("입력창에 할 일을 입력해주세요");
  //     } else {
  //       const data = {
  //         name: addTodo,
  //       };
  //       axios.post(BASE_URL, data).then((res) => {
  //         event.stopPropagation();
  //         alert("새로운 할 일이 등록되었습니다.");
  //         location.reload();
  //       });
  //     }
  //   }
  // };

  // const onClickAddButton = (event: MouseEvent<HTMLDivElement>) => {
  //   if (!addTodo) {
  //     alert("입력창에 할 일을 입력해주세요");
  //   } else {
  //     const data = {
  //       name: addTodo,
  //     };
  //     axios.post(BASE_URL, data).then((res) => {
  //       alert("새로운 할 일이 등록되었습니다.");
  //       location.reload();
  //     });
  //   }
  // };

  const onChangeCheck = (event: ChangeEvent<HTMLInputElement>, key: string) => {
    const { id } = event.target as HTMLInputElement;
    axios
      .patch(BASE_URL + `/${key}`, {
        isCompleted: event.target.checked,
      })
      .then((res) => {
        location.reload();
      });
  };

  const onClickList = (
    event: MouseEvent<HTMLDivElement> | MouseEvent<HTMLLabelElement>
  ) => {
    const { id } = event.target as HTMLDivElement;
    router.push(`/items/${id}`);
  };

  const onClickCheck = (
    event: MouseEvent<HTMLDivElement>,
    isCompleted: boolean
  ) => {
    const { id } = event.target as HTMLDivElement;
    axios
      .patch(BASE_URL + `/${id}`, {
        isCompleted: !isCompleted,
      })
      .then((res) => {
        location.reload();
      });
  };

  return (
    <>
      {/* <AddTodo totalLists={totalLists} /> */}
      <TodoListUI
        totalLists={totalLists}
        // onChangeAddTodo={onChangeAddTodo}
        // onKeyDownAddTodo={onKeyDownAddTodo}
        // onClickAddButton={onClickAddButton}
        onClickList={onClickList}
        onChangeCheck={onChangeCheck}
        onClickCheck={onClickCheck}
      />
    </>
  );
}
