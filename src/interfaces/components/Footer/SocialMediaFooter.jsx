import { ContainerFooter } from "../../../styles/Footer";
import Icons from "../../reusable/Icons";
import { facebook, instagram, twitter } from "../../../assets/variables";

const SocialMediaFooter = () => {
  return (
    <ContainerFooter>
      <h3>STAY CONNECTED</h3>
      <Icons src={facebook} alt="facebook" className="social" />
      <Icons src={twitter} alt="twitter" className="social" />
      <Icons src={instagram} alt="instagram" className="social" />
    </ContainerFooter>
  );
};

export default SocialMediaFooter;
