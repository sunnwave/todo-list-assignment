import styled from '@emotion/styled';

export const Wrapper=styled.div`
height:100vh;
background-color:#FFFFFF;
display:flex;
flex-direction: column;
align-items: center;
@media screen and (max-width:743px){
  min-height:830px;
  width:375px;
  padding: 16px;
}
@media (min-width:744px) and (max-width:1199px){
  min-height:862px;
  width:744px;
  padding:24px;
}
@media (min-width: 1200px){
  min-height:503px;
  width:1200px;
  padding: 24px 102px;
}
`

export const ContentsWrapper=styled.div`
width:100%;
display:flex;
align-items: center;

@media screen and (max-width:743px){
  flex-direction: column;
  margin-top: 17px;
}
@media (min-width:744px) and (max-width:1199px){
flex-direction: column;
margin-top: 24px;
}
@media (min-width: 1200px){
  flex-direction:row;
  justify-content:space-between;
  margin-top: 24px;
}
`

export const ButtonWrapper=styled.div`
width:100%;
display:flex;
flex-direction: row;
align-items:center;
margin-top: 24px;

@media screen and (max-width:743px){
  justify-content:center;
}
@media (min-width:744px) and (max-width:1199px){
  justify-content:center;
}
@media (min-width: 1200px){
  justify-content: flex-end;
}
`
export const Button=styled.button`
width:164.35px;
height:52px;
border: 2px solid #0F172A;
border-radius: 24px;
box-shadow: 3.65px 4px #0F172A;

font-family: NanumSquare;
font-size: 16px;
font-weight: 700;
line-height: 18.16px;
text-align: center;

display:flex;
flex-direction: row;
align-items:center;
justify-content:center;
cursor: pointer;

&#update{
  background: #E2E8F0;
  color: #0F172A;
  &.active{
    background: #BEF264;
  }
}

&#delete{
  background: #F43F5E;
  color: #FFFFFF;
}

@media screen and (max-width:743px){
  &#update{
  margin-right: 7px;
  }
}
@media (min-width:744px) and (max-width:1199px){
  &#update{
  margin-right: 16px;
  }
}
@media (min-width: 1200px){
  &#update{
  margin-right: 16px;
}
}

`
export const ButtonIcon=styled.img`
width:16px;
height:16px;
margin-right: 4px;
`