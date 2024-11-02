import styled from '@emotion/styled';

export const Wrapper=styled.div`
height: 100vh;
padding-top: 24px;

background-color:#F1F5F9;
display: flex;
flex-direction: column;
align-items:center;

@media screen and (max-width:743px){
  width:375px;
  padding-left: 16px;
  padding-right: 16px;
}
@media (min-width:744px) and (max-width:1199px){
  width:744px;
  padding-left: 24px;
  padding-right: 24px;
}
@media (min-width: 1200px){
  width: 1200px;
  /* padding-left: 40px;
  padding-right: 40px; */
  
}
`
export const AddWrapper=styled.div`
width:100%;
height:56px;
display:flex;
flex-direction: row;
align-items:center;
justify-content:space-between;
@media screen and (max-width:743px){
  margin-bottom: 24px;
}
@media (min-width:744px) and (max-width:1199px){
  margin-bottom: 40px;
}
@media (min-width: 1200px){
  margin-bottom: 40px;
}

`
export const AddInput=styled.input`
height: 52.5px;
border-radius: 24px;
background: #F1F5F9;
border: 2px solid #0F172A;

font-family: NanumSquare;
padding: 21px 24px 21px 24px;
font-size: 16px;
font-weight: 400;
line-height: 18.16px;
background-color: #F1F5F9;
color: #64748B;
outline:none;

display:flex;
flex-direction: row;
align-items:center;

@media screen and (max-width:743px){
  width:278.88px;
  box-shadow: 1.12px 3.5px #0F172A;
}
@media (min-width:744px) and (max-width:1199px){
  width:515.93px;
  box-shadow: 2.07px 3.5px #0F172A;
}
@media (min-width: 1200px){
  width: 1011.94px;
  box-shadow: 4.06px 3.5px #0F172A;
}
`
export const AddButton=styled.button`
height: 52px;
border-radius: 24px;
border: 2px;
border: 2px solid #0F172A;
background: #E2E8F0;

font-family: NanumSquare;
font-size: 16px;
font-weight: 700;
line-height: 18.16px;
text-align: center;
color: #0F172A;

@media screen and (max-width:743px){
  width:54.78px;
  box-shadow: 1.22px 4px #0F172A;
  
}
@media (min-width:744px) and (max-width:1199px){
  width:158.48px;
  box-shadow: 3.52px 4px #0F172A;

}
@media (min-width: 1200px){
  width: 164.35px;
  box-shadow: 3.65px 4px #0F172A;
}

`
export const ListContainer=styled.div`
width:100%;
display:flex;
justify-content:space-between;
@media screen and (max-width:743px){
  flex-direction: column;
}
@media (min-width:744px) and (max-width:1199px){
flex-direction: column;
}
@media (min-width: 1200px){
flex-direction:row;
}
`

export const ListWrapper=styled.div`
/* width:100%; */
display:flex;
flex-direction:column;

@media screen and (max-width:743px){
  width:344px;
  margin-bottom: 48px;
}
@media (min-width:744px) and (max-width:1199px){
width:696px;
margin-bottom: 48px;
}
@media (min-width: 1200px){
width:588px;
}
`

export const TodoTitle=styled.img`
width:101px;
height:36px;
/* margin-bottom: ; */
`
export const List=styled.div`
width:100%;
height:50px;
border-radius: 27px;
border: 2px solid #0F172A;
display: flex;
flex-direction: row;
align-items:center;

margin-top: 16px;

padding:9px 12px 9px 12px;
box-sizing: border-box;

&.todo{
  background: #FFFFFF;
}

&.done{
  background: #EDE9FE;
}

`
export const TodoCheck=styled.div`
width: 32px;
height: 32px;
background: #FEFCE8;
border: 2px solid #0F172A;
border-radius: 50%;
margin-right:16px;
:hover{
  background-color: #7C3AED;
;
}
`
export const Label=styled.label`
height:18px;
font-family: NanumSquare;
font-size: 16px;
font-weight: 400;
line-height: 18.16px;
text-align: center;
color: #1E293B;

&.done{
  text-decoration: line-through;
}
`

export const DoneTitle=styled.img`
width:97px;
height:36px;
`
export const DoneCheck=styled.img`
width:32px;
height:32px;
margin-right: 16px;
`

export const EmptyWrapper=styled.div`
display:flex;
flex-direction: column;
align-items:center;
`
export const EmptyImg=styled.img`
@media screen and (max-width:743px){
width:120px;
height:120px;
margin-bottom: 16px;
}
@media (min-width:744px) and (max-width:1199px){
width:240px;
height:240px;
margin-bottom: 24px;
}
@media (min-width: 1200px){
  width:240px;
  height:240px;
  margin-bottom: 24px;
}
`
export const EmptyLabel=styled.label`
font-family: NanumSquare;
font-size: 16px;
font-weight: 700;
line-height: 18.16px;
text-align: center;
color: #94A3B8;

`