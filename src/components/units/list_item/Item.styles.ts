import styled from '@emotion/styled'

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
margin-right:16px;

cursor: pointer;
&.todo{
  background: #FEFCE8;
  border: 2px solid #0F172A;
  border-radius: 50%;
  :hover{
    border:none;
    background-image: url('/todo-list-assignment/list/done_check.png');
    background-size: 32px 32px;
  }
}

&.done{
  background-image: url('/todo-list-assignment/list/done_check.png');
  background-size: 32px 32px;
  :hover{
    background-image: none;
    background: #FEFCE8;
  border: 2px solid #0F172A;
  border-radius: 50%;
  }

}
`

export const Label=styled.label`
/* width:100%; */
height:18px;
font-family: NanumSquare;
font-size: 16px;
font-weight: 400;
line-height: 18.16px;
text-align: start;
color: #1E293B;
cursor: pointer;
&.done{
  text-decoration: line-through;
}
`

export const DoneCheck=styled.img`
width:32px;
height:32px;
margin-right: 16px;
`