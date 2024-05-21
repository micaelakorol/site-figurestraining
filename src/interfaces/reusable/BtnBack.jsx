import { Link } from "react-router-dom";
import { back } from "../../assets/variables";

const BtnBack = ({ to }) => {
  return (
    <Link to={to}>
      <img src={back} alt="icon-back" />
    </Link>
  );
};

export default BtnBack;
