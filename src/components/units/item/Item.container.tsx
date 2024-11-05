import axios from "axios";
import { ChangeEvent, MouseEvent } from "react";
import { BASE_URL } from "../../../commons/api/api";
import { useRouter } from "next/router";
import ItemUI from "./Item.presenter";
import { IItemProps } from "../../../commons/types/types";

export default function Item(props: IItemProps) {
  const router = useRouter();

  // 할 일 체크박스 클릭 이벤트 함수
  const onClickCheck = (
    event: MouseEvent<HTMLDivElement>,
    isCompleted: boolean
  ) => {
    const { id } = event.target as HTMLDivElement;
    axios
      .patch(BASE_URL + `/${id}`, {
        isCompleted: !isCompleted,
      })
      .then((res) => {
        location.reload();
      });
  };

  // 할 일 목록 클릭 이벤트 함수. 클릭 시 할 일 상세페이지로 이동
  const onClickItem = (
    event: MouseEvent<HTMLDivElement> | MouseEvent<HTMLLabelElement>
  ) => {
    const { id } = event.target as HTMLDivElement;
    router.push(`/items/${id}`);
  };

  return (
    <ItemUI
      item={props.item}
      onClickCheck={onClickCheck}
      onClickItem={onClickItem}
    />
  );
}
