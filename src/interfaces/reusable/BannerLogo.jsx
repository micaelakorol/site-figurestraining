import { Banner } from "../../styles/Login";
import { figuresLogoDesk } from "../../assets/variables";
import { Logo } from "../../styles/Nav";
const BannerLogo = () => {
  return (
    <Banner>
      <Logo src={figuresLogoDesk} alt="logo-figures" />
    </Banner>
  );
};

export default BannerLogo;
