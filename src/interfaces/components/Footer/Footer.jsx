import {
  FooterInfo,
  ContainerFooter,
  ItemFooter,
} from "../../../styles/Footer";
import { figuresLogoDesk } from "../../../assets/variables";
import { Logo } from "../../../styles/Nav";
import SocialMediaFooter from "./SocialMediaFooter";
import infoGym from "./data/FooterInfo";

const Footer = () => {
  return (
    <FooterInfo>
      <Logo src={figuresLogoDesk} alt="logo-figures" />
      {infoGym.map((item) => (
        <ContainerFooter key={item.id}>
          <h3>{item.title}</h3>
          <ItemFooter>{item.item1}</ItemFooter>
          <ItemFooter>{item.item3 && item.item3}</ItemFooter>
          <ItemFooter>{item.item2}</ItemFooter>
        </ContainerFooter>
      ))}
      {/** Buttons twitter,facebook,instagram: */}
      <SocialMediaFooter />
    </FooterInfo>
  );
};

export default Footer;
