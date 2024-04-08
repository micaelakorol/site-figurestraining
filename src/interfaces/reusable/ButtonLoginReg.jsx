import { BtnLogin } from "../../styles/Login";

const ButtonLoginReg = ({ as, type, onClick, children, disabled }) => {
  return (
    <BtnLogin as={as} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </BtnLogin>
  );
};

export default ButtonLoginReg;
