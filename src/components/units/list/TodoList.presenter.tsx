import * as T from "./TodoList.styles";
import { Ilist, ITodoListUIProps } from "../../../commons/types/types";
import AddTodo from "../add/AddTodo.container";
import ItemUI from "../item/Item.presenter";
import Item from "../item/Item.container";

export default function TodoListUI(props: ITodoListUIProps) {
  const todos: Ilist[] = [];
  const dones: Ilist[] = [];

  props.totalLists?.map((el) =>
    el.isCompleted ? dones.push(el) : todos.push(el)
  );

  return (
    <T.Wrapper>
      <AddTodo totalLists={props.totalLists} />
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
                <Item item={el} />
                // <ItemUI
                //   item={el}
                //   onClickCheck={props.onClickCheck}
                //   onClickList={props.onClickList}
                // />
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
                // <ItemUI
                //   item={el}
                //   onClickCheck={props.onClickCheck}
                //   onClickList={props.onClickList}
                // />
                <Item item={el} />
              ))}
            </div>
          )}
        </T.ListWrapper>
      </T.ListContainer>
    </T.Wrapper>
  );
}
