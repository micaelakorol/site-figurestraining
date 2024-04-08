import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { Color } from "./Color";
import { ButtonNav } from "./Nav";

const BtnIcon = styled(Link)`
  margin: 0 1rem 0 1rem;
`;
const ContainerDashboard = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${Color.lemonade};
  padding: 1rem;
`;

const ContainerPerfil = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    width: 1.5rem;
    border-radius: 50%;
    margin: 0 0.5rem;
    cursor: pointer;
  }
`;

const BtnUpdate = styled(ButtonNav)`
  margin-top: 1rem;
  font-size: 0.8rem;
  border:none;
  font-weight: 600;
`;

export { BtnIcon, ContainerDashboard, BtnUpdate, ContainerPerfil };
