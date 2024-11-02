import styled from '@emotion/styled';

export const Wrapper=styled.div`
height:100vh;
background-color:#FFFFFF;
display:flex;
flex-direction: column;
align-items: center;
@media screen and (max-width:743px){
  width:375px;
  padding: 16px;
}
@media (min-width:744px) and (max-width:1199px){
padding: 24px;
}
@media (min-width: 1200px){
  width:1200px;
  padding-top: 24px;
  padding-left: 102px;
  padding-right: 102px;

}
`

export const List=styled.div`
height:64px;
background: #FFFFFF;
border: 2px solid #0F172A;
border-radius: 24px;
display:flex;
flex-direction: row;
justify-content: center;
align-items:center;

@media screen and (max-width:743px){
  width:343px;
}
@media (min-width:744px) and (max-width:1199px){
width:696px;
}
@media (min-width: 1200px){
  width:996px;
}
`
export const TodoCheck=styled.div`
width:32px;
height:32px;
background: #FEFCE8;
border: 2px solid #0F172A;
border-radius: 50%;
margin-right: 16px;
`
export const DoneCheck=styled.img`

@media screen and (max-width:743px){
  
}
@media (min-width:744px) and (max-width:1199px){

}
@media (min-width: 1200px){
  
}
`
export const ListLabel=styled.label`
font-family: NanumSquare;
font-size: 20px;
font-weight: 700;
line-height: 22.7px;
text-align: center;
color: #0F172A;
text-decoration: underline;
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

export const Upload=styled.div`
height:311px;
background-color: #F8FAFC;
border: 2px dashed #CBD5E1;
border-radius: 24px;
position: relative;
@media screen and (max-width:743px){
  width:343px;
}
@media (min-width:744px) and (max-width:1199px){
width:696px;
}
@media (min-width: 1200px){
  width:384px;
}

`
export const ImageIcon=styled.img`
width:64px;
height:64px;
position:absolute;
top:50%;
left:50%;
transform:translate(-50%, -50%);
`
export const UploadButton=styled.button`
width:64px;
height:64px;
border: none;
background: #E2E8F0;
border-radius: 50%;
position:absolute;
bottom:16px;
right:16px;
`

export const UploadIcon=styled.img`
width:24px;
height:24px;
`

export const Memo=styled.div`
height:311px;
background-image: url('/detail/memo.png');
display:flex;
flex-direction: column;
align-items:center;
border-radius:24px;
padding:24px 16px;

@media screen and (max-width:743px){
  width:343px;
  background-size: 343px 311px;
  margin-top: 17px;
}
@media (min-width:744px) and (max-width:1199px){
width:696px;
background-size: 696px 311px;
margin-top: 24px;
}
@media (min-width: 1200px){
  width:588px;
  background-size: 588px 311px;
}

`
export const MemoLabel=styled.label`
font-family: NanumSquare;
font-size: 16px;
font-weight: 800;
line-height: 18.16px;
text-align: center;
color: #92400E;
margin-bottom: 16px;

`
export const MemoContents=styled.textarea`
font-family: NanumSquare;
font-size: 16px;
font-weight: 400;
line-height: 18.16px;
text-align: center;
color: #1E293B;
width:100%;
height:100%;  
border:none;
outline:none;
background: transparent;
resize:none;

::-webkit-scrollbar{
  width:4px;
  margin-left: 2px;

}
::-webkit-scrollbar-thumb{
  background: #FDE68A;
  border-radius: 3px;
}

::-webkit-scrollbar-track{
  background: transparent;
}
@media screen and (max-width:743px){
}
@media (min-width:744px) and (max-width:1199px){
}
@media (min-width: 1200px){
  
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

&.update{
  background: #E2E8F0;
  color: #0F172A;

}

&.delete{
  background: #F43F5E;
  color: #FFFFFF;

}

@media screen and (max-width:743px){
  &.update{
  margin-right: 7px;
  }
}
@media (min-width:744px) and (max-width:1199px){
  &.update{
  margin-right: 16px;
  }
}
@media (min-width: 1200px){
  &.update{
  margin-right: 16px;
}
}

`
export const ButtonIcon=styled.img`
width:16px;
height:16px;
margin-right: 4px;
@media screen and (max-width:743px){
  
}
@media (min-width:744px) and (max-width:1199px){

}
@media (min-width: 1200px){
  
}

`