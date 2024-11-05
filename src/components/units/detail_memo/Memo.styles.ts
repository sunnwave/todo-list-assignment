import styled from '@emotion/styled'

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