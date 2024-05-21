import styled from "styled-components";


const ContainerLogin = styled.section`
display: flex;
flex-direction: column;
`

const LoginButton = styled.button`
  width: 35%;
  padding: 0.5rem;
  color: #010001;
  opacity: none;
  cursor: pointer;
  margin: 1rem auto;
  font-size: 0.88rem;
  border: none;
  border-radius: 0.6rem;
  font-weight: 600;
`;

const ImageBtn = styled.img`
width: 5%;
margin: 0 .3rem;
`

export {LoginButton,ImageBtn,ContainerLogin}