import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 60px;
  background: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (max-width: 743px) {
    justify-content: center;
  }
  @media (min-width: 744px) and (max-width: 1199px) {
    justify-content: center;
  }
  @media (min-width: 1200px) {
    justify-content: center;
  }
`;

export const LogoWrapper = styled.div`
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (max-width: 743px) {
    width: 343px;
  }
  @media (min-width: 744px) and (max-width: 1199px) {
    width: 744px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
`;
export const Logo = styled.div`
  cursor: pointer;
  @media (max-width: 743px) {
    width: 71px;
    height: 40px;
    background-image: url("/todo-list-assignment/header/logo_small.png");
    background-size: 71px 40px;
  }
  @media (min-width: 744px) {
    width: 151px;
    height: 40px;
    background-image: url("/todo-list-assignment/header/logo_large.png");
    background-size: 151px 40px;
  }
`;
