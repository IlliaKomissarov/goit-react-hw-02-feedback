import styled from 'styled-components';

export const Btn = styled.button`
width: 100px;
height: 45px;
margin: 14px;
font-size: 20px;
font-weight: 700;
border: none;
outline: none;
border-radius: 6px;
 color:black;
  background-color: white;
  border: 1px solid black;
cursor: pointer;
text-Shadow: 1px 0 1px #ffffff6f;
transform: scale(0.9);
letter-spacing: 2px;
transition: transform 250ms;
&:hover {
  transform: scale(0.8);
  font-weight: normal;
  text-transform: uppercase;
  color: white;
background-color: black;
border: 1px solid white;
letter-spacing: 0;
transition: transform 500ms;
}
&:not(:last-child) {
  margin-right: 15px;
}
`;