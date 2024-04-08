import styled from "styled-components";
import { Link } from "react-router-dom";
import { Color } from "./Color";

const Container = styled.header`
  padding: 1.5rem;
  display: flex;
  justify-content: end;
  border-bottom: 1.5px solid ${Color.bgNav};
`;
const Logo = styled.img`
  max-width: 200px;
  position: absolute;
  left: 0px;
  top: -1.8rem;
  @media(max-width: 375px) {
    display: none;
  }
`;

const ButtonNav = styled(Link)`
  background: ${Color.lemonade};
  color: ${Color.black};
  font-weight: 500;
  margin: 0 1rem 0 2rem;
  font-size: 0.9rem;
  padding: 0.69rem 0.78rem;
  border-radius: 0.4rem;
  letter-spacing: 0px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: ${Color.lightGreen};
  }
`;

export { ButtonNav, Container, Logo };
