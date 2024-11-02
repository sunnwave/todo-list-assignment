import * as D from "./TodoDetail.styles";

export default function TodoDetailUI() {
  return (
    <D.Wrapper>
      <D.List>
        <D.TodoCheck></D.TodoCheck>
        <D.ListLabel>비타민 챙겨 먹기</D.ListLabel>
      </D.List>
      <D.ContentsWrapper>
        <D.Upload>
          <D.ImageIcon src="/detail/img_icon.png" />
          <D.UploadButton>
            <D.UploadIcon src="/detail/upload_button.png" />
          </D.UploadButton>
        </D.Upload>
        <D.Memo>
          <D.MemoLabel>Memo</D.MemoLabel>
          <D.MemoContents />
        </D.Memo>
      </D.ContentsWrapper>
      <D.ButtonWrapper>
        <D.Button className="update">
          <D.ButtonIcon src="/detail/check_icon.png" />
          수정 완료
        </D.Button>
        <D.Button className="delete">
          <D.ButtonIcon src="/detail/delete_icon.png" />
          삭제하기
        </D.Button>
      </D.ButtonWrapper>
    </D.Wrapper>
  );
}
