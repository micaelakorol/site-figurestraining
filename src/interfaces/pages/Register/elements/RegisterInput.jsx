import React, { useContext } from "react";
import { InputField } from "../../../reusable/InputField";
import { handleInput } from "../../../../services/functions/handleInput";
import { UserContext } from "../../context/UserContextField";
import { inputFields } from "../data/inputFields";

const RegisterInput = () => {
  const { fieldForm, setFieldForm } = useContext(UserContext);

  return (
    <>
      {inputFields.map((field) => (
        <React.Fragment key={field.name}>
          <label htmlFor={field.name}>{field.label}</label>
          <InputField
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            value={fieldForm[field.value] || ""}
            required={true}
            onChange={(e) => handleInput(e, fieldForm, setFieldForm)}
          />
        </React.Fragment>
      ))}
    </>
  );
};

export default RegisterInput;
