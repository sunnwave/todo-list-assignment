import TodoListUI from "./TodoList.presenter";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Ilist } from "../../../commons/types/types";
import { BASE_URL } from "../../../commons/api/api";

export default function TodoList() {
  const [totalLists, setTotalLists] = useState<Ilist[]>([]);

  // 할 일 목록 데이터 받아오기
  useEffect(() => {
    axios.get(BASE_URL).then((res) => {
      setTotalLists(res.data);
    });
  }, []);

  return (
    <>
      <TodoListUI totalLists={totalLists} />
    </>
  );
}
