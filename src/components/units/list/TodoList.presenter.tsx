import * as T from "./TodoList.styles";
import { Ilist, ITodoListUIProps } from "../../../commons/types/types";
import AddTodo from "../add/AddTodo.container";
import Item from "../item/Item.container";
import EmptyUI from "../empty/Emtpy.presenter";

export default function TodoListUI(props: ITodoListUIProps) {
  const todos: Ilist[] = [];
  const dones: Ilist[] = [];

  //todo list들을 할 일과 완료한 일로 구분
  props.totalLists?.map((el) =>
    el.isCompleted ? dones.push(el) : todos.push(el)
  );

  return (
    <T.Wrapper>
      {/* 할 일 추가 컴포넌트 */}
      <AddTodo totalLists={props.totalLists} />
      {/* todo list 부분 */}
      <T.ListContainer>
        {/* 할 일 부분 */}
        <T.ListWrapper className="todo">
          <T.TodoTitle src="/todo-list-assignment/list/todo.png" />
          {/* 할 일 목록이 비어있을 때 */}
          {todos?.length === 0 ? (
            <EmptyUI isCompleted={false} />
          ) : (
            // 할 일 목록이 존재할 때
            <div>
              {todos?.map((el) => (
                <Item item={el} />
              ))}
            </div>
          )}
        </T.ListWrapper>
        {/* 완료한 일 부분*/}
        <T.ListWrapper className="done">
          <T.DoneTitle src="/todo-list-assignment/list/done.png" />
          {dones?.length === 0 ? (
            // 완료한 일 목록이 비었을 때
            <EmptyUI isCompleted={true} />
          ) : (
            // 완료한 일이 존재할 때
            <div>
              {dones?.map((el) => (
                <Item item={el} />
              ))}
            </div>
          )}
        </T.ListWrapper>
      </T.ListContainer>
    </T.Wrapper>
  );
}
