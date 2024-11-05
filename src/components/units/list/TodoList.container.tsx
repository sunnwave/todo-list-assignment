import TodoListUI from "./TodoList.presenter";
import axios from "axios";
import { useEffect, useState } from "react";
import { IItem } from "../../../commons/types/types";
import { BASE_URL } from "../../../commons/api/api";

//전체 목록 페이지 컴포넌트
export default function TodoList() {
  const [totalLists, setTotalLists] = useState<IItem[]>([]);

  // 할 일 목록 데이터 받아오기
  useEffect(() => {
    try {
      axios.get(BASE_URL).then((res) => {
        setTotalLists(res.data);
      });
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <>
      <TodoListUI totalLists={totalLists} />
    </>
  );
}
