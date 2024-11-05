import * as T from "./TodoList.styles";
import { Ilist, ITodoListUIProps } from "../../../commons/types/types";

export default function TodoListUI(props: ITodoListUIProps) {
  const todos: Ilist[] = [];
  const dones: Ilist[] = [];

  props.totalLists?.map((el) =>
    el.isCompleted ? dones.push(el) : todos.push(el)
  );

  return (
    <T.ListContainer>
      <T.ListWrapper className="todo">
        <T.TodoTitle src="/todo-list-assignment/list/todo.png" />
        {/* 할 일 목록이 비어있을 때 */}
        {todos?.length === 0 ? (
          <T.EmptyWrapper>
            <T.EmptyImg src="/todo-list-assignment/list/todo_char.png" />
            <T.EmptyLabel>
              할 일이 없어요. <br />
              TODO를 새롭게 추가해주세요!
            </T.EmptyLabel>
          </T.EmptyWrapper>
        ) : (
          // 할 일 목록이 존재할 때
          <div>
            {todos?.map((el) => (
              <T.List className="todo" id={String(el.id)}>
                <T.TodoCheck
                  className="todo"
                  onClick={(e) => props.onClickCheck(e, el.isCompleted)}
                  id={String(el.id)}
                ></T.TodoCheck>
                <T.Label
                  className="todo"
                  onClick={props.onClickList}
                  id={String(el.id)}
                >
                  {el.name}
                </T.Label>
              </T.List>
            ))}
          </div>
        )}
      </T.ListWrapper>
      <T.ListWrapper className="done">
        <T.DoneTitle src="/todo-list-assignment/list/done.png" />
        {dones?.length === 0 ? (
          // 한 일 목록이 비었을 때
          <T.EmptyWrapper>
            <T.EmptyImg src="/todo-list-assignment/list/done_char.png" />
            <T.EmptyLabel>
              아직 다 한 일이 없어요.
              <br />
              해야 할 일을 체크해보세요!
            </T.EmptyLabel>
          </T.EmptyWrapper>
        ) : (
          // 한 일 목록이 존재할 때
          <div>
            {dones?.map((el) => (
              <T.List className="done" id={String(el.id)}>
                <T.TodoCheck
                  className="done"
                  onClick={(e) => props.onClickCheck(e, el.isCompleted)}
                  id={String(el.id)}
                ></T.TodoCheck>
                <T.Label
                  className="done"
                  onClick={props.onClickList}
                  id={String(el.id)}
                >
                  {el.name}
                </T.Label>
              </T.List>
            ))}
          </div>
        )}
      </T.ListWrapper>
    </T.ListContainer>
  );
}
