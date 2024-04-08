import { styled } from "styled-components";
import { ButtonNav } from "./Nav";
import { Title } from "./Presentation";
import { Color } from "./Color";
import { Link } from "react-router-dom";

const ContainerForm = styled.section`
  width: 100%;
  margin-top: 3rem;
  text-align: center;
  @media (max-width: 1024px) {
    input,
    button {
      width: 50%;
    }
    @media (max-width: 480px) {
      input,
      button {
        width: 85%;
      }
    }
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  label {
    margin: 0.5rem;
    font-weight: 600;
    font-size: 0.7rem;
    font-style: italic;
  }
`;

const Inputs = styled.input`
  padding: 0.7rem 0.6rem;
  width: 28%;
  margin: 0 0.5rem;
  border: 1.5px solid black;
  border-bottom: 3.5px solid black;
  outline: none;
  border-radius: 0.3rem;
`;

const BtnLogin = styled(ButtonNav)`
  width: 26%;
  padding: 0.5rem;
  color: black;
  border-color: black;
  opacity: ${props => (props.disabled ? '.5' : 'none')};
  cursor: pointer;
  margin: 1rem auto;
  font-size: 0.9rem;
  border-bottom: 3.5px solid black;
  font-weight: 600;
  &:hover {
    border: 1.5px solid transparent;
    border-bottom: 3.5px solid black;
  }
`;

const TitleLogin = styled(Title)`
  font-size: 2rem;
  margin: 1.5rem auto;
  @media (max-width: 480px) {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
`;
const Banner = styled.section`
  background-color: ${Color.lemonade};
  width: 100%;
  padding: 2rem;
`;

const LinkReset = styled(Link)`
  text-decoration: underline;
  font-size: 0.8rem;
  margin-bottom: 0.6rem;
  color: ${Color.black};
`;

const Support = styled.a`
  display: flex;
  justify-content: end;
  position: absolute;
  bottom:0;
  right: 0;
  img {
    width: 5rem;
    cursor: pointer;
    padding: 1rem;
  }
`;

export {
  Inputs,
  ContainerForm,
  Form,
  BtnLogin,
  TitleLogin,
  Banner,
  LinkReset,
  Support,
};
