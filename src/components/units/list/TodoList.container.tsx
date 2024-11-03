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
import { Ilist } from "./TodoList.types";

const BASE_URL = "https://assignment-todolist-api.vercel.app/api/sun/items";

export default function TodoList() {
  const [totalLists, setTotalLists] = useState<Ilist[]>([]);
  const [addTodo, setAddTodo] = useState("");
  const router = useRouter();

  // const fetchLists = async () => {
  //   const result = await axios.get(BASE_URL);
  //   setTotalLists(result.data);
  // };

  useEffect(() => {
    axios.get(BASE_URL).then((res) => {
      setTotalLists(res.data);
    });
  }, []);

  const onChangeAddTodo = (event: ChangeEvent<HTMLInputElement>) => {
    setAddTodo(event.target.value);
  };

  const onKeyDownAddTodo = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (!addTodo) {
        alert("입력창에 할 일을 입력해주세요");
      } else {
        console.log("엔터 입력됨");
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

  const onClickAddButton = (event: MouseEvent<HTMLDivElement>) => {
    if (!addTodo) {
      alert("입력창에 할 일을 입력해주세요");
    } else {
      console.log("추가하기 클릭됨");
      const data = {
        name: addTodo,
      };
      axios.post(BASE_URL, data).then((res) => {
        alert("새로운 할 일이 등록되었습니다.");
        location.reload();
      });
    }
  };

  const onClickTodoToDone = (event: MouseEvent<HTMLDivElement>) => {
    const { id } = event.target as HTMLDivElement;
    axios
      .patch(BASE_URL + `/${id}`, {
        isCompleted: true,
      })
      .then((res) => location.reload());
  };

  const onChangeTodoToDone = (event: MouseEvent<HTMLInputElement>) => {
    const { id } = event.target as HTMLDivElement;
    axios
      .patch(BASE_URL + `/${id}`, {
        isCompleted: true,
      })
      .then((res) => location.reload());
  };

  const onClickDoneToTodo = (event: MouseEvent<HTMLDivElement>) => {
    const { id } = event.target as HTMLDivElement;
    axios
      .patch(BASE_URL + `/${id}`, {
        isCompleted: false,
      })
      .then((res) => location.reload());
  };

  const onClickList = (
    event: MouseEvent<HTMLDivElement> | MouseEvent<HTMLLabelElement>
  ) => {
    const { id } = event.target as HTMLDivElement;
    router.push(`/items/${id}`);
  };

  return (
    <TodoListUI
      totalLists={totalLists}
      onChangeAddTodo={onChangeAddTodo}
      onKeyDownAddTodo={onKeyDownAddTodo}
      onClickAddButton={onClickAddButton}
      onClickTodoToDone={onClickTodoToDone}
      onClickDoneToTodo={onClickDoneToTodo}
      onClickList={onClickList}
      onChangeTodoToDone={onChangeTodoToDone}
    />
  );
}
