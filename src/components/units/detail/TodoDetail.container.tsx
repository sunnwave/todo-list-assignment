import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import TodoDetailUI from "./TodoDetail.presenter";
import { useRouter } from "next/router";
import axios from "axios";
import { Ivariables } from "./TodoDetail.types";

export default function TodoDetail() {
  const BASE_URL = "https://assignment-todolist-api.vercel.app/api/sun/items";

  const router = useRouter();
  const [item, setItem] = useState();
  const [isCompleted, setIsCompleted] = useState<boolean>();
  const [checkChanged, setCheckChanged] = useState<boolean>(false);
  const [name, setName] = useState<string>();
  const [memo, setMemo] = useState<string>();
  const [PreImageUrl, setPreImageUrl] = useState<string | ArrayBuffer | null>(
    "/todo-list-assignment/detail/img_icon.png"
  );
  const [localImg, setLocalImg] = useState<File>();
  const [isNewImageUploaded, setIsNewImageUploaded] = useState<boolean>(false);
  const [isTodoChanged, setIsTodoChanged] = useState<boolean>(false);

  useEffect(() => {
    if (!router.isReady) return;

    axios.get(BASE_URL + `/${router.query.itemId}`).then((res) => {
      setItem(res.data);
      if (res.data.imageUrl) setPreImageUrl(res.data.imageUrl);
    });
  }, [router.isReady]);

  const onClickCheck = (event: MouseEvent<HTMLInputElement>) => {
    const { checked } = event.target as HTMLInputElement;
    setIsCompleted(checked);
    setCheckChanged(true);
    setIsTodoChanged(true);
  };

  const onChangeNameInput = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    setIsTodoChanged(true);
  };

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const maxSize = 5 * 1024 * 1024;
    const checkEng = /^[a-z|A-Z]+$/;

    if (event.target.files) {
      const file = event.target.files[0];
      const fileName = file?.name.split(".")[0];
      if (!checkEng.test(fileName)) {
        alert("파일 이름이 영어인 이미지만 업로드 가능합니다");
      }
      if (file?.size > maxSize) {
        alert("5MB 이하의 이미지만 업로드 가능합니다");
      }
      if (checkEng.test(file?.name.split(".")[0]) && !(file?.size > maxSize)) {
        setLocalImg(file);
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
          setPreImageUrl(reader.result);
          setIsNewImageUploaded(true);
          setIsTodoChanged(true);
        };
      }
    }
  };
  const onChangeMemo = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMemo(event.target.value);
    setIsTodoChanged(true);
  };

  const onClickDelete = (event: MouseEvent<HTMLButtonElement>) => {
    axios.delete(BASE_URL + `/${router.query.itemId}`).then((res) => {
      alert("삭제되었습니다.");
      router.push("/todo-list-assignment/");
    });
  };

  const handleEditButton = () => {};

  const uploadImg = async () => {
    if (localImg) {
      const form = new FormData();
      form.append("image", localImg);

      const response = await axios.post(
        "https://assignment-todolist-api.vercel.app/api/sun/images/upload",
        form,
        {
          headers: {
            accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data.url;
    }
  };

  const onClickEdit = async (event: MouseEvent<HTMLButtonElement>) => {
    const variables: Ivariables = {};
    const responseUrl = await uploadImg();

    if (name) variables.name = name;
    if (memo) variables.memo = memo;
    if (responseUrl) variables.imageUrl = responseUrl;
    if (checkChanged) variables.isCompleted = isCompleted;

    axios.patch(BASE_URL + `/${router.query.itemId}`, variables).then((res) => {
      alert("수정되었습니다.");
      router.push(`/todo-list-assignment/`);
    });
  };
  return (
    <TodoDetailUI
      item={item}
      onClickCheck={onClickCheck}
      onClickDelete={onClickDelete}
      onChangeNameInput={onChangeNameInput}
      onChangeFile={onChangeFile}
      onChangeMemo={onChangeMemo}
      onClickEdit={onClickEdit}
      PreImageUrl={PreImageUrl}
      isNewImageUploaded={isNewImageUploaded}
      isTodoChanged={isTodoChanged}
    />
  );
}
