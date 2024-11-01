import axios from "axios";
import ShowTodoListsUI from "./ShowTodoLists.presenter";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Ilist } from "../../../commons/types/types";
import { useQuery } from "react-query";
import { fetchLists } from "../../../commons/api/api";

export default function ShowTodoListsComponent() {
  const BASE_URL = "https://assignment-todolist-api.vercel.app/api/sun/items";

  const [todoLists, setTodoLists] = useState<Ilist[]>([]);
  const [totalLists, setTotalLists] = useState<Ilist[]>([]);
  const [doneLists, setDoneLists] = useState<Ilist[]>([]);

  const todos: Ilist[] = [];
  const dones: Ilist[] = [];
  const router = useRouter();

  const fetchLists = async () => {
    const response = await axios.get(BASE_URL);
    setTotalLists(response.data);
  };

  useEffect(() => {
    fetchLists();
    totalLists?.map((el) => (el.isCompleted ? dones.push(el) : todos.push(el)));
    setTodoLists(todos);
    setDoneLists(dones);
  }, []);

  console.log("dones", doneLists);
  console.log("todos", todoLists);

  return (
    <>
      <ShowTodoListsUI todoLists={todoLists} doneLists={doneLists} />
    </>
  );
}
