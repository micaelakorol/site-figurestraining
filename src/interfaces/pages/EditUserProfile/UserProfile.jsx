import React from "react";
import { Banner } from "../../../styles/Login";
import { BtnIcon } from "../../../styles/Dashboard";
import FormUpdateProfile from "./elements/FormUpdateProfile";
import Back from "../../reusable/Back";
const EditForm = () => {
  return (
    <>
      <Banner>
        <BtnIcon to="/dashboard">
          <Back />
        </BtnIcon>
      </Banner>
      {/** form for edit personal information */}
      <FormUpdateProfile />
    </>
  );
};

export default EditForm;
