import { ContainerForm, Form } from "../../../styles/Login";
import { TitleRegister } from "../../../styles/Register";
import { ToastContainer } from "react-toastify";
import BannerLogo from "../../reusable/BannerLogo";
import BtnBack from "../../reusable/BtnBack";
import ButtonLoginReg from "../../reusable/ButtonLoginReg";
import { useSelector } from "react-redux";
import RegisterInput from "./elements/RegisterInput";
import HandleRegistration from "./functions/handleRegistration";
const RenderRegister = () => {
  const { processUserRegistration } = HandleRegistration();
  const { loading, disabled } = useSelector((state) => state.loading);
  return (
    <>
      <BannerLogo />
      <ContainerForm>
        <TitleRegister>We are happy that you join us!</TitleRegister>
        <Form onSubmit={processUserRegistration}>
          <RegisterInput />
          <ButtonLoginReg as="button" type="submit" disabled={disabled}>
            {loading ? "Loading..." : "Register"}
          </ButtonLoginReg>
          <ToastContainer position="top-center" />
          <BtnBack to="/login" />
        </Form>
      </ContainerForm>
    </>
  );
};

export default RenderRegister;
