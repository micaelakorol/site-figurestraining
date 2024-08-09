import { styled } from "styled-components";
import { Color } from "./Color";
import { ButtonNav } from "./Nav";
const ContainerPresentation = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 5%;
`;

const Information = styled.section`
  font-family: inherit;
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
  margin: 8% 0 2% 0;
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
  margin: 1.55rem 0 1.8rem 0;
  text-align: start;
  width: 75%;
  font-size: 0.99rem;
`;

export {
  ContainerPresentation,
  Information,
  Title,
  ButtonMoreInfo,
  Description,
};
