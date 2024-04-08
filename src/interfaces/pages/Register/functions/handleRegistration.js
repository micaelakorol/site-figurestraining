import { useEffect } from "react";
import { RegisterValidation } from "./registerValidation";
import { CleanUp } from "../../../../services/functions/cleanUp";

const HandleRegistration = () => {
  const { cleanUpState } = CleanUp();
  const { validationsInput } = RegisterValidation();

  const processUserRegistration = async (e) => {
    e.preventDefault();
    await validationsInput(e);
  };
  useEffect(() => {
    return () => {
      cleanUpState();
    };
  }, []);
  return { processUserRegistration };
};

export default HandleRegistration;
