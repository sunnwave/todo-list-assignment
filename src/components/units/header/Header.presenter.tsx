import { useState } from "react";
import * as H from "./Header.styles";

interface IHeaderUIProps {
  onClickLogo: () => void;
  // width: number;
}

export default function HeaderUI(props: IHeaderUIProps) {
  return (
    <H.Wrapper>
      <H.LogoWrapper>
        <H.Logo onClick={props.onClickLogo}></H.Logo>
      </H.LogoWrapper>
    </H.Wrapper>
  );
}
