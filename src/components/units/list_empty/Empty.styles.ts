import styled from "@emotion/styled";

export const EmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const EmptyImg = styled.img`
  @media screen and (max-width: 743px) {
    width: 120px;
    height: 120px;
    margin-bottom: 16px;
  }

  @media (min-width: 744px) and (max-width: 1199px) {
    width: 240px;
    height: 240px;
    margin-bottom: 24px;
  }
  @media (min-width: 1200px) {
    width: 240px;
    height: 240px;
    margin-bottom: 24px;
  }
`;
export const EmptyLabel = styled.label`
  font-family: NanumSquare;
  font-size: 16px;
  font-weight: 700;
  line-height: 18.16px;
  text-align: center;
  color: #94a3b8;
  white-space: pre-wrap;
`;
