import * as T from "./TodoList.styles";

export default function TodoListUI() {
  return (
    <T.Wrapper>
      <T.AddWrapper>
        <T.AddInput placeholder="할 일을 입력해주세요" />
        <T.AddButton>+ 추가하기</T.AddButton>
      </T.AddWrapper>
      <T.ListContainer>
        <T.ListWrapper className="todo">
          <T.TodoTitle src="/list/todo.png" />
          {/* <T.List className="todo">
            <T.TodoCheck></T.TodoCheck>
            <T.Label className="todo">비타민 챙겨 먹기</T.Label>
          </T.List>
          <T.List className="todo">
            <T.TodoCheck></T.TodoCheck>
            <T.Label className="todo">맥주 마시기</T.Label>
          </T.List>
          <T.List className="todo">
            <T.TodoCheck></T.TodoCheck>
            <T.Label className="todo">운동하기</T.Label>
          </T.List> */}
          <T.EmptyWrapper>
            <T.EmptyImg src="/list/todo_char.png" />
            <T.EmptyLabel>
              할 일이 없어요. <br />
              TODO를 새롭게 추가해주세요!
            </T.EmptyLabel>
          </T.EmptyWrapper>
        </T.ListWrapper>
        <T.ListWrapper className="done">
          <T.DoneTitle src="/list/done.png" />
          {/* <T.List className="done">
            <T.DoneCheck src="/list/done_check.png" />
            <T.Label className="done">은행 다녀오기</T.Label>
          </T.List>
          <T.List className="done">
            <T.DoneCheck src="/list/done_check.png" />
            <T.Label className="done">비타민 챙겨 먹기</T.Label>
          </T.List> */}
          <T.EmptyWrapper>
            <T.EmptyImg src="/list/done_char.png" />
            <T.EmptyLabel>
              아직 다 한 일이 없어요.
              <br />
              해야 할 일을 체크해보세요!
            </T.EmptyLabel>
          </T.EmptyWrapper>
        </T.ListWrapper>
      </T.ListContainer>
    </T.Wrapper>
  );
}
