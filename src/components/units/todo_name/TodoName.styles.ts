import styled from '@emotion/styled'

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
