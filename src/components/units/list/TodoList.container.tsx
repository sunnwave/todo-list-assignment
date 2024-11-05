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

  // const onChangeCheck = (event: ChangeEvent<HTMLInputElement>, key: string) => {
  //   const { id } = event.target as HTMLInputElement;
  //   axios
  //     .patch(BASE_URL + `/${key}`, {
  //       isCompleted: event.target.checked,
  //     })
  //     .then((res) => {
  //       location.reload();
  //     });
  // };

  // const onClickItem = (
  //   event: MouseEvent<HTMLDivElement> | MouseEvent<HTMLLabelElement>
  // ) => {
  //   const { id } = event.target as HTMLDivElement;
  //   router.push(`/items/${id}`);
  // };

  // const onClickCheck = (
  //   event: MouseEvent<HTMLDivElement>,
  //   isCompleted: boolean
  // ) => {
  //   const { id } = event.target as HTMLDivElement;
  //   axios
  //     .patch(BASE_URL + `/${id}`, {
  //       isCompleted: !isCompleted,
  //     })
  //     .then((res) => {
  //       location.reload();
  //     });
  // };

  return (
    <>
      {/* <AddTodo totalLists={totalLists} /> */}
      <TodoListUI
        totalLists={totalLists}
        // onChangeAddTodo={onChangeAddTodo}
        // onKeyDownAddTodo={onKeyDownAddTodo}
        // onClickAddButton={onClickAddButton}
        // onClickItem={onClickItem}
        // onChangeCheck={onChangeCheck}
        // onClickCheck={onClickCheck}
      />
    </>
  );
}
