import React, { useContext } from "react";
import { InputField } from "../../../reusable/InputField";
import { UserContext } from "../../context/UserContextField";
import { handleInput } from "../../../../services/functions/handleInput";

const ResetInput = () => {
  const { fieldForm, setFieldForm } = useContext(UserContext);
  const { email } = fieldForm;
  return (
    <>
      <label htmlFor="email">*Recovery email:</label>
      <InputField
        type="email"
        name="email"
        placeholder="email@example.com"
        value={email}
        required={true}
        onChange={(e) => handleInput(e, fieldForm, setFieldForm)}
      />
    </>
  );
};

export default ResetInput;
