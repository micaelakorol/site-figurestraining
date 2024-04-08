import styled from "styled-components";
import { Color } from "./Color";

const FooterInfo = styled.footer`
  background-color: ${Color.lemonade};
  display: grid;
  grid-template-columns: repeat(3,1fr);
  justify-items: center;
  @media(max-width:768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media(max-width:480px) {
    grid-template-columns: 1fr;
    justify-items: baseline;
  }
`;
const ContainerFooter = styled.section`
  padding: 1.5rem;
  /** icons social media */
  .social {
    width: 1.5rem;
    margin: 1rem;
  }
`;

const ItemFooter = styled.p`
  margin: 0.6rem auto;
  letter-spacing: 0;
  font-size: 0.9rem;
`;

export { FooterInfo, ContainerFooter, ItemFooter };
