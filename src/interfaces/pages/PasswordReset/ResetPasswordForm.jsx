import { BtnLogin, ContainerForm, Form } from "../../../styles/Login";
import ChangePassword from "./functions/changePassword";
import { ToastContainer } from "react-toastify";
import BtnBack from "../../reusable/BtnBack";
import { useSelector } from "react-redux";
import ResetInput from "./elements/ResetInput";

const ResetPasswordForm = () => {
  const { handleReset } = ChangePassword();
  const { loading, disabled } = useSelector((state) => state.loading);

  return (
    <ContainerForm>
      <Form onSubmit={handleReset} method="post">
        <ResetInput />
        <ToastContainer position="top-center" theme="colored" />
        <BtnLogin as="button" type="submit" disabled={disabled}>
          {loading ? "Loading.." : "Send"}
        </BtnLogin>
        <BtnBack to="/" />
      </Form>
    </ContainerForm>
  );
};

export default ResetPasswordForm;
