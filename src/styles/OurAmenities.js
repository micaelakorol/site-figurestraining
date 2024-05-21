import styled from "styled-components";
import { Color } from "./Color";

const ContainerAmenities = styled.section`
  background-color: ${Color.black};
  margin-top: 2rem;
  padding: 1rem;
  width: 100%;
`;

const TitleAmenities = styled.h1`
  color: white;
  text-align: end;
  font-weight: 200;
  font-size: 2rem;
  margin: 1.6rem;
  text-transform: uppercase;
`;

const ContainerCard = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  p {
    margin-bottom: 0.8rem;
    text-transform: uppercase;
    color: ${Color.lemonade};
    font-weight: 500;
  }
  div {
    font-size: 1rem;
    color: white;
    margin: 0 1rem;
    list-style: none;
    text-align: center;
  }
  b {
    font-weight: 300;
    font-size: 0.8rem;
  }
  img {
    width: 40%;
    margin-left: -1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    img {
      width: 30%;
    }
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
export { ContainerAmenities, TitleAmenities, ContainerCard };
