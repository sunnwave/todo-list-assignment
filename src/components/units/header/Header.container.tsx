import { useRouter } from "next/router";
import HeaderUI from "./Header.presenter";

export default function Header() {
  const router = useRouter();

  const onClickLogo = () => {
    console.log("Logo Clicked");
    router.push(`/`);
  };
  return <HeaderUI />;
}
