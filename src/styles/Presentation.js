import { styled } from "styled-components";
import { Color } from "./Color";
import { ButtonNav } from "./Nav";
const ContainerPresentation = styled.main`
  display: grid;
  grid-template-columns: 50% 50%;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const Image = styled.section`
  display: flex;
  justify-content: center;
  img {
    width: 70%;
    object-fit: contain;
    height: 100%;
    margin-right: 5%;
    padding: 1rem;
  }
  @media (max-width: 768px) {
    img {
      margin: auto;
    }
  }
`;
const Information = styled.section`
  font-family: "Epilogue", sans-serif;
  margin-left: 10%;
  @media (max-width: 768px) {
    margin: 1rem;
    h1 {
      font-size: 2.5rem;
    }
  }
`;
const Title = styled.h1`
  font-size: 3.5rem;
  width: 75%;
  margin: 8% 0 5% 0;
  mark {
    background-color: ${Color.lemonade};
  }
  @media (max-width: 1024px) {
    width: 100%;
    font-size: 3.2rem;
  }
`;

const ButtonMoreInfo = styled(ButtonNav)`
  background: ${Color.lightGreen};
  color: ${Color.black};
  margin: 0;
`;

const Description = styled.p`
  margin: 1rem 0 1.5rem 0;
  text-align: justify;
  font-size: 0.99rem;
`;

export {
  ContainerPresentation,
  Information,
  Image,
  Title,
  ButtonMoreInfo,
  Description,
};
