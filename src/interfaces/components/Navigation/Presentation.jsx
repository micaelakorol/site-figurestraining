import {
  ContainerPresentation,
  Information,
  Title,
  ButtonMoreInfo,
  Description,
} from "../../../styles/Presentation";
import Icons from "../../reusable/Icons";
import { wsp } from "../../../assets/variables";
const Presentation = () => {
  return (
    <ContainerPresentation>
      <Information>
        {/* Section description */}
        <Title>
          Dare to change <mark> this </mark> is the first step, just do it!
        </Title>
        <Description>
          Ready to transform your life and achieve your fitness goals? At our
          gym, we are determined to guide you every step of the way so that you
          become the best version of yourself.
        </Description>
        <ButtonMoreInfo as="a" href="https://wa.link/v1lm6v" target="_blank">
          {" "}
          <Icons src={wsp} alt="whatsapp-icon" /> Chat with us!
        </ButtonMoreInfo>
      </Information>
      {/* Section image presentation 
      <Image>
        <Icons src={mainImage} alt="woman-training" />
      </Image>*/}
    </ContainerPresentation>
  );
};

export default Presentation;
