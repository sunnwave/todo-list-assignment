import styled from '@emotion/styled';

export const Wrapper=styled.div`
/* width:100vw; */
height: 60px;
background: #FFFFFF;
border-bottom: 1px solid #E2E8F0;
display:flex;
flex-direction: row;
align-items: center;
@media screen and (max-width:743px){
  /* width:100vw; */
  /* padding-left: 16px; */
  justify-content:center;
}
@media (min-width:744px) and (max-width:1199px){
  /* width:100vw; */
  /* padding-left: 24px; */
  justify-content:center;
}
@media (min-width: 1200px){
  justify-content: center;
  /* width: 100vw; */
  /* padding-left: 40px; */
}
`

export const LogoWrapper=styled.div`
height:60px;
display: flex;
flex-direction:row;
align-items:center;
@media screen and (max-width:743px){
width:343px;
}
@media (min-width:744px) and (max-width:1199px){
  width:744px;
  /* padding-left: 24px; */
}
@media (min-width: 1200px){
  width: 1200px;
  /* padding-left: 40px; */
}
`
export const Logo=styled.div`

cursor: pointer;
@media (max-width:743px){
  width:71px;
  height: 40px;
  background-image: url('/header/logo_small.png');
  background-size: 71px 40px;

}
@media (min-width:744px){
  width:151px;
  height:40px;
  background-image: url('/header/logo_large.png');
  background-size: 151px 40px;
}
`