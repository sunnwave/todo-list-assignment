import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import TodoDetailUI from "./TodoDetail.presenter";
import { useRouter } from "next/router";
import axios from "axios";
import { BASE_URL, IMAGE_UPLOAD_URL } from "../../../commons/api/api";
import { Ivariables } from "../../../commons/types/types";

export default function TodoDetail() {
  const router = useRouter();

  const [item, setItem] = useState();
  const [name, setName] = useState<string>();
  const [isCompleted, setIsCompleted] = useState<boolean>();
  const [memo, setMemo] = useState<string>();

  //화면에 미리 보여지는 이미지
  const [PreImageUrl, setPreImageUrl] = useState<string | ArrayBuffer | null>(
    "/todo-list-assignment/detail/img_icon.png"
  );
  //업로드할 이미지 파일
  const [localImg, setLocalImg] = useState<File>();

  // 체크박스 상태 변화 여부 저장
  const [checkChanged, setCheckChanged] = useState<boolean>(false);
  //수정 사항 발생 여부 저장
  const [isTodoChanged, setIsTodoChanged] = useState<boolean>(false);

  //이미지 변경 여부 저장
  // const [isNewImageUploaded, setIsNewImageUploaded] = useState<boolean>(false);

  //할 일 상세 데이터 받아오기
  useEffect(() => {
    if (!router.isReady) return;
    try {
      axios.get(BASE_URL + `/${router.query.itemId}`).then((res) => {
        setItem(res.data);
        if (res.data.imageUrl) setPreImageUrl(res.data.imageUrl);
      });
    } catch (err) {
      console.error(err);
    }
  }, [router.isReady]);

  //할 일 체크박스 클릭 이벤트 함수. 클릭 시 상태 변화 저장
  const onClickCheck = (event: MouseEvent<HTMLInputElement>) => {
    const { checked } = event.target as HTMLInputElement;
    setIsCompleted(checked);
    setCheckChanged(true);
    setIsTodoChanged(true);
  };

  // 할 일 이름 수정 이벤트 함수. 인풋 창 정보 변경시 name 상태 변화
  const onChangeNameInput = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    setIsTodoChanged(true);
  };

  //이미지 파일 수정 이벤트 함수.
  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const maxSize = 5 * 1024 * 1024;
    const checkEng = /^[a-z|A-Z]+$/;

    if (event.target.files) {
      const file = event.target.files[0];
      const fileName = file?.name.split(".")[0];
      //파일 이름 검증
      if (!checkEng.test(fileName)) {
        alert("파일 이름이 영어인 이미지만 업로드 가능합니다");
      }
      //파일 사이즈 검증
      if (file?.size > maxSize) {
        alert("5MB 이하의 이미지만 업로드 가능합니다");
      }
      if (checkEng.test(fileName) && !(file?.size > maxSize)) {
        setLocalImg(file);
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
          setPreImageUrl(reader.result);
          setIsTodoChanged(true);
          // setIsNewImageUploaded(true);
        };
      }
    }
  };

  //메모 수정 이벤트 함수
  const onChangeMemo = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMemo(event.target.value);
    setIsTodoChanged(true);
  };

  //삭제하기 버튼 클릭 이벤트 함수. 클릭시 해당 할 일 삭제 후 할 일 목록 페이지로 이동
  const onClickDelete = (event: MouseEvent<HTMLButtonElement>) => {
    try {
      axios.delete(BASE_URL + `/${router.query.itemId}`).then((res) => {
        alert("삭제되었습니다.");
        router.push("/todo-list-assignment/");
      });
    } catch (err) {
      console.error(err);
    }
  };

  //이미지 업로드 함수. 이미지 업로드 완료 후 response로 받은 업로드된 이미지 url 반환
  const uploadImg = async () => {
    if (localImg) {
      const form = new FormData();
      form.append("image", localImg);

      try {
        const response = await axios.post(IMAGE_UPLOAD_URL, form, {
          headers: {
            accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
        });
        return response.data.url;
      } catch (err) {
        console.error(err);
      }
    }
  };

  //수정하기 버튼 클릭 함수. 할 일 체크박스, 할 일 이름, 메모, 이미지 중 변경 사항이 있으면 수정 후 할 일 목록 페이지로 이동
  const onClickEdit = async (event: MouseEvent<HTMLButtonElement>) => {
    const variables: Ivariables = {};
    const responseUrl = await uploadImg();

    if (name) variables.name = name;
    if (memo) variables.memo = memo;
    if (responseUrl) variables.imageUrl = responseUrl;
    if (checkChanged) variables.isCompleted = isCompleted;

    try {
      axios
        .patch(BASE_URL + `/${router.query.itemId}`, variables)
        .then((res) => {
          alert("수정되었습니다.");
          router.push(`/todo-list-assignment/`);
        });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <TodoDetailUI
      item={item}
      onClickCheck={onClickCheck}
      onChangeNameInput={onChangeNameInput}
      onClickDelete={onClickDelete}
      onChangeFile={onChangeFile}
      onChangeMemo={onChangeMemo}
      onClickEdit={onClickEdit}
      PreImageUrl={PreImageUrl}
      localImg={localImg}
      isTodoChanged={isTodoChanged}
    />
  );
}
