import React from "react";
import google from "../../../../assets/google.svg";
import { ContainerLogin, ImageBtn, LoginButton } from "../../../../styles/LoginGoogle";
import { HandleLoginGooogle } from "../functions/handleLoginGoogle";

const LoginGoogle = () => {
    const {loginGoogle} = HandleLoginGooogle()
  return (
    <ContainerLogin>
      <LoginButton onClick={() => loginGoogle()}>
        <ImageBtn src={google} alt="logo google" />
        Access with Google
      </LoginButton>
    </ContainerLogin>
  );
};

export default LoginGoogle;
