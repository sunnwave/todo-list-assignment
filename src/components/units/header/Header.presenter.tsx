import * as H from "./Header.styles";
import { IHeaderUIProps } from "../../../commons/types/types";

export default function HeaderUI(props: IHeaderUIProps) {
  return (
    <H.Wrapper>
      <H.LogoWrapper>
        <H.Logo onClick={props.onClickLogo}></H.Logo>
      </H.LogoWrapper>
    </H.Wrapper>
  );
}
