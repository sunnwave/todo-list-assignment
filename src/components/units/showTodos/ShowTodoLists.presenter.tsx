import { Ilist, IShowTodoListUIProps } from "../../../commons/types/types";

export default function ShowTodoListsUI(props: IShowTodoListUIProps) {
  // console.log("여기는", props.todoLists, props.doneLists);
  const todos = props.todoLists.map((el) => (
    <div key={el.id}>
      {el.isCompleted} {el.name}
    </div>
  ));
  return (
    <>
      <div>
        <label>=====todolist=====</label>
      </div>
      <div>
        <label>=====donelist=====</label>
        {/* <div>{props.doneLists}</div> */}
        {/* {props.doneLists.map((el) => (
          <div>
            {el.name} {el.isCompleted}
          </div>
        ))} */}
      </div>
    </>
  );
}
