import axios from "axios";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import WriteTodoUI from "./WriteTodo.presenter";
import { BASE_URL } from "../../../commons/api/api";

export default function TodoWriteComponent() {
  const [name, setName] = useState("");

  const router = useRouter();

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    console.log(event.target.value);
  };

  const onClickAdd = async () => {
    const result = axios.post(`${BASE_URL}`, {
      name: name,
    });
    setName("");
    console.log(result);
  };

  return (
    <>
      <WriteTodoUI onChange={onChangeContents} onClick={onClickAdd} />
    </>
  );
}
