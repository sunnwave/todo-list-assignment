import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 100vh;
  padding-top: 24px;

  background-color: #f1f5f9;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 743px) {
    width: 375px;
    padding-left: 16px;
    padding-right: 16px;
  }
  @media (min-width: 744px) and (max-width: 1199px) {
    width: 744px;
    padding-left: 24px;
    padding-right: 24px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
`;

export const ListContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 743px) {
    flex-direction: column;
  }
  @media (min-width: 744px) and (max-width: 1199px) {
    flex-direction: column;
  }
  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 743px) {
    width: 344px;
    margin-bottom: 48px;
  }
  @media (min-width: 744px) and (max-width: 1199px) {
    width: 696px;
    margin-bottom: 48px;
  }
  @media (min-width: 1200px) {
    width: 588px;
  }
`;

export const TodoTitle = styled.img`
  width: 101px;
  height: 36px;
`;

export const DoneTitle = styled.img`
  width: 97px;
  height: 36px;
`;
