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

export const List=styled.div`
height:64px;
background: #FFFFFF;
border: 2px solid #0F172A;
border-radius: 24px;
display:flex;
flex-direction: row;
justify-content: center;
align-items:center;
padding:16px;
&.done{
  background: #DDD6FE;
}

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
export const TodoCheck=styled.input`
display:none;

:checked+label{
  background-image: url('/todo-list-assignment/detail/done_check.png');
  background-size: 32px 32px;
  border:none;
}
`

export const LabelForCheckbox=styled.label`
  width:32px;
  height:32px;
  margin-right: 16px;
  background: #FEFCE8;
  border: 2px solid #0F172A;
  border-radius: 50%;
  cursor: pointer;
`

export const NameInput=styled.input`
width:100%;
font-family: NanumSquare;
font-size: 20px;
font-weight: 700;
line-height: 22.7px;
text-align: left;
color: #0F172A;
text-decoration: underline;
border:none;
outline:none;
background-color: transparent;
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
display:flex;
flex-direction: column;
align-items:center;
justify-content:center;

&>input[type="file"]{
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip:rect(0,0,0,0);
  border: 0;
}

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

export const ImageInputLabel=styled.label`
cursor: pointer;
border:none;
`

export const ImageEditIcon=styled.img`
width:64px;
height:64px;
cursor: pointer;
border-radius: 50%;
position:absolute;
bottom:16px;
right:16px;
&.none{
  background: #E2E8F0;
  border:none;
  background-image:url('/todo-list-assignment/detail/upload_icon.png');
  background-size: 24px 24px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
}
&.uploaded{
  border: 2px solid #0F172A;
  background: #0F172A80;
  background-image:url('/todo-list-assignment/detail/edit_icon.png');
  background-size: 24px 24px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
}
`
export const ImageInput=styled.input`
`

export const PreImg=styled.img`
width:100%;
height:100%;
border:none;
&.none{
  width:64px;
  height: 64px;
}
`

export const Memo=styled.div`
height:311px;
background-image: url('/todo-list-assignment/detail/memo.png');
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