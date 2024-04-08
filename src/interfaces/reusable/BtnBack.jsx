import { ButtonNav } from "../../styles/Nav";
import Back from "./Back";

const BtnBack = ({ to }) => {
  return (
    <ButtonNav to={to}>
      <Back />
    </ButtonNav>
  );
};

export default BtnBack;
