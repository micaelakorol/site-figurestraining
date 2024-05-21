import {
  ContainerForm,
  Form,
  LinkReset,
  TitleLogin,
} from "../../../styles/Login";
import { ToastContainer } from "react-toastify";
import BannerLogo from "../../reusable/BannerLogo";
import BtnSupport from "./elements/BtnSupport";
import BtnBack from "../../reusable/BtnBack";
import ButtonLoginReg from "../../reusable/ButtonLoginReg";
import { useSelector } from "react-redux";
import LoginForm from "./elements/LoginForm";
import { HandleLogin } from "./functions/handleLogin";
import Login from "./elements/LoginGoogle";

const LoginRender = () => {
  const { handleFormLogin } = HandleLogin();
  const { loading, disabled } = useSelector((state) => state.loading);

  return (
    <>
      <BannerLogo />
      <ContainerForm>
        <TitleLogin>We have been waiting for you!</TitleLogin>
        <Form onSubmit={handleFormLogin} method="post">
          {/* inputs */}
          <LoginForm />
          <ButtonLoginReg as="button" type="submit" disabled={disabled}>
            {loading ? "Loading..." : "Login"}
          </ButtonLoginReg>
          <ToastContainer position="top-center" delay="100" />
          <LinkReset to="/reset">
            Have you forgotten your password? Press HERE
          </LinkReset>
          <Login />
          <BtnBack to="/" />
        </Form>
        <BtnSupport />
      </ContainerForm>
    </>
  );
};

export default LoginRender;
