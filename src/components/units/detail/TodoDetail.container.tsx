import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import TodoDetailUI from "./TodoDetail.presenter";
import { useRouter } from "next/router";
import axios from "axios";

export default function TodoDetail() {
  const BASE_URL = "https://assignment-todolist-api.vercel.app/api/sun/items";

  const router = useRouter();
  const [item, setItem] = useState();
  const [isCompleted, setIsCompleted] = useState<boolean>();
  const [checkChanged, setCheckChanged] = useState<boolean>(false);
  const [name, setName] = useState<string>();
  const [memo, setMemo] = useState<string>();
  const [imageUrl, setImageUrl] = useState<string | ArrayBuffer | null>(
    "/detail/img_icon.png"
  );
  const [localImg, setLocalImg] = useState<File>();
  const [isImageUploaded, setIsImageUploaded] = useState<boolean>(false);
  const [responseUrl, setResponseUrl] = useState<string>();

  useEffect(() => {
    if (!router.isReady) return;

    axios.get(BASE_URL + `/${router.query.itemId}`).then((res) => {
      setItem(res.data);
      console.log(res.data);
    });
  }, [router.isReady]);

  const onChangeCheck = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("체크 클릭됨");
    setIsCompleted(event.target.checked);
    setCheckChanged(true);
    console.log(event.target.checked);
  };

  const onChangeNameInput = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const maxSize = 5 * 1024 * 1024;
    const checkEng = /[a-zA-Z]/;

    if (event.target.files) {
      const file = event.target.files[0];
      if (!checkEng.test(file?.name.split(".")[0])) {
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
          setImageUrl(reader.result);
          setIsImageUploaded(true);
        };
      }
    }
  };
  const onChangeMemo = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMemo(event.target.value);
  };
  const onClickDelete = (event: MouseEvent<HTMLButtonElement>) => {
    axios.delete(BASE_URL + `/${router.query.itemId}`).then((res) => {
      alert("삭제되었습니다.");
      router.push("/");
    });
  };

  const handleEditButton = () => {};

  const uploadImg = () => {
    if (localImg) {
      const form = new FormData();
      form.append("image", localImg);

      const response = axios
        .post(
          "https://assignment-todolist-api.vercel.app/api/sun/images/upload",
          form,
          {
            headers: {
              accept: "application/json",
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((res) => {
          console.log(res.data.url);
          setResponseUrl(res.data.url);
        });
    }
  };

  const onClickEdit = (event: MouseEvent<HTMLButtonElement>) => {
    console.log("수정버튼 클릭");

    interface Ivariables {
      name?: string;
      memo?: string;
      imageUrl?: string;
      isCompleted?: boolean;
    }
    const variables: Ivariables = {};
    uploadImg();
    // if (localImg) {
    //   const form = new FormData();
    //   form.append("image", localImg);

    //   const response = axios
    //     .post(
    //       "https://assignment-todolist-api.vercel.app/api/sun/images/upload",
    //       form,
    //       {
    //         headers: {
    //           // ...form.getHeaders(),
    //           accept: "application/json",
    //           "Content-Type": "multipart/form-data",
    //         },
    //       }
    //     )
    //     .then((res) => {
    //       console.log(res.data.url);
    //       setResponseUrl(res.data.url);
    //     });
    // }

    if (name) variables.name = name;
    if (memo) variables.memo = memo;
    if (responseUrl) variables.imageUrl = responseUrl;
    if (checkChanged) variables.isCompleted = isCompleted;

    axios.patch(BASE_URL + `/${router.query.itemId}`, variables).then((res) => {
      console.log("수정 완료");
      alert("수정되었습니다.");
      location.reload();
    });
  };
  return (
    <TodoDetailUI
      item={item}
      onChangeCheck={onChangeCheck}
      onClickDelete={onClickDelete}
      onChangeNameInput={onChangeNameInput}
      onChangeFile={onChangeFile}
      onChangeMemo={onChangeMemo}
      imageUrl={imageUrl}
      isImageUploaded={isImageUploaded}
      onClickEdit={onClickEdit}
    />
  );
}
