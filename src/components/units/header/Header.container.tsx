import { useRouter } from "next/router";
import HeaderUI from "./Header.presenter";
import { useEffect, useState } from "react";

export default function Header() {
  const router = useRouter();
  // const [width, setWidth] = useState(
  //   typeof window!=='undefined'?window.innerWidth:);

  const onClickLogo = () => {
    console.log("Logo Clicked");
    router.push(`/`);
  };

  // const handleResize = () => {
  //   setWidth(window.innerWidth);

  // };

  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <HeaderUI
      onClickLogo={onClickLogo}
      // width={width}
    />
  );
}
