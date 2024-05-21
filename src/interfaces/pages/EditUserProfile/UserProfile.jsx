import React from "react";
import { Banner } from "../../../styles/Login";
import FormUpdateProfile from "./elements/FormUpdateProfile";
import BtnBack from "../../reusable/BtnBack";
const EditForm = () => {
  return (
    <>
      <Banner>
      <BtnBack to="/dashboard" />
      </Banner>
      {/** form for edit personal information */}
      <FormUpdateProfile />
    </>
  );
};

export default EditForm;
