import styled from '@emotion/styled'

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