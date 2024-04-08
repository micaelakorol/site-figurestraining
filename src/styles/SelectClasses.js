import { styled } from "styled-components";
import { Color } from "./Color";
import { FooterInfo } from "./Footer";

const ContainerSelect = styled(FooterInfo)`
  width: 80%;
  padding: 2rem;
  margin: 3rem auto;
  border-radius: 0.5rem;
  color: ${Color.white};
  place-items: baseline;
  background-color: ${Color.bgClasses};
  font-family: "Merriweather", serif;
`;

const Classes = styled.section`
  text-align: start;
  li {
    margin: 0.3rem 0;
    list-style: none;
  }
  .day {
    font-weight: 600;
  }
  .see-more {
    margin: 0.5rem 0;
    cursor: pointer;
    font-size: 0.7rem;
  }
`;
const Items = styled.p`
  margin: 0.5rem 0 0.5rem 0;
`;

const Inscription = styled.button`
  background: ${Color.black};
  border-radius: 0.2rem;
  text-transform: uppercase;
  color: ${Color.white};
  padding: 0.4rem 0.5rem;
  font-size: 0.5rem;
  font-weight: 600;
  border: 1.5px solid ${Color.borderGreen};
  margin: auto;
  &:hover {
    border: 1.5px solid white;
    color: ${Color.borderGreen};
  }
`;

export { ContainerSelect, Classes, Items, Inscription };
