import * as T from "./TodoList.styles";
import { Ilist, ITodoListUIProps } from "./TodoList.types";

export default function TodoListUI(props: ITodoListUIProps) {
  const todos: Ilist[] = [];
  const dones: Ilist[] = [];

  props.totalLists?.map((el) =>
    el.isCompleted ? dones.push(el) : todos.push(el)
  );

  return (
    <T.Wrapper>
      {/* 할 일 입력 창  */}
      <T.AddWrapper>
        <T.AddTodo
          placeholder="할 일을 입력해주세요"
          onChange={props.onChangeAddTodo}
          onKeyDown={props.onKeyDownAddTodo}
        />
        {props.totalLists?.length === 0 ? (
          <T.AddButton
            className="empty"
            onClick={props.onClickAddButton}
          ></T.AddButton>
        ) : (
          <T.AddButton onClick={props.onClickAddButton}></T.AddButton>
        )}
      </T.AddWrapper>
      {/* 할 일, 한 일 목록을 보여주는 부분 */}
      <T.ListContainer>
        <T.ListWrapper className="todo">
          <T.TodoTitle src="/list/todo.png" />
          {/* 할 일 목록이 비어있을 때 */}
          {todos?.length === 0 ? (
            <T.EmptyWrapper>
              <T.EmptyImg src="/list/todo_char.png" />
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
                    onClick={props.onClickTodoToDone}
                    id={String(el.id)}
                  ></T.TodoCheck>
                  <T.Label
                    className="todo"
                    onClick={props.onClickList}
                    id={String(el.id)}
                  >
                    {el.name}
                  </T.Label>
                  {/* <T.TodoCheck
                    type="checkbox"
                    id={String(el.id)}
                    defaultChecked={el.isCompleted}
                    onChange={props.onChangeTodoToDone}
                  />
                  <T.LabelForCheckbox htmlFor={String(el.id)}>
                    {el.name}
                  </T.LabelForCheckbox> */}
                </T.List>
              ))}
            </div>
          )}
        </T.ListWrapper>
        <T.ListWrapper className="done">
          <T.DoneTitle src="/list/done.png" />
          {dones?.length === 0 ? (
            // 한 일 목록이 비었을 때
            <T.EmptyWrapper>
              <T.EmptyImg src="/list/done_char.png" />
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
                    onClick={props.onClickDoneToTodo}
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
    </T.Wrapper>
  );
}
