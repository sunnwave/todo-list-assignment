import axios from "axios";
import { ChangeEvent, MouseEvent } from "react";
import { BASE_URL } from "../../../commons/api/api";
import { useRouter } from "next/router";
import ItemUI from "./Item.presenter";
import { IItemProps } from "../../../commons/types/types";

export default function Item(props: IItemProps) {
  const router = useRouter();

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
