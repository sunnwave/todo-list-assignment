import { useRouter } from "next/router";
import HeaderUI from "./Header.presenter";
import { useEffect, useState } from "react";

export default function Header() {
  const router = useRouter();

  const onClickLogo = () => {
    console.log("Logo Clicked");
    router.push(`/todo-list-assignment/`);
  };

  return <HeaderUI onClickLogo={onClickLogo} />;
}
