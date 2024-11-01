import styled from '@emotion/styled';

export const Wrapper=styled.div`
height: 60px;
background: #FFFFFF;
border-bottom: 1px solid #E2E8F0;
display:flex;
flex-direction: row;
align-items: center;
@media screen and (max-width:743px){
  width:375px;
  padding-left: 16px;
}
@media (min-width:744px) and (max-width:1279px){
  width:744px;
  padding-left: 24px;
}
@media (min-width: 1280px){
  width: 1280px;
  padding-left: 40px;
}


`
export const Logo=styled.img<{src:string}>`
/* margin-left: 360px; */
@media (max-width:375px){
  width: 71px;
  height: 40px;

}
@media (min-width:375px){
  width: 151px;
  height: 40px;
  
}
`