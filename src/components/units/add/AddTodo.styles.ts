import styled from '@emotion/styled'

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
export const AddTodo=styled.input`
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
export const AddButton=styled.div`
height:56px;
cursor: pointer;
@media screen and (max-width:743px){
  width: 56px;
  background-image: url('/todo-list-assignment/list/add_small.png');
  background-size: 56px 56px;
  &.empty{
    background-image: url('/todo-list-assignment/list/add_small_purple.png');
  }
}
@media (min-width:744px){
  width:168px;
  background-image: url('/todo-list-assignment/list/add_large.png');
  background-size: 168px 56px;
  &.empty{
    background-image: url('/todo-list-assignment/list/add_large_purple.png')
  }
}
`