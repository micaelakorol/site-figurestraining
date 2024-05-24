import { useContext } from "react";
import { InputField } from "../../../reusable/InputField";
import { handleInput } from "../../../../services/functions/handleInput";
import { UserContext } from "../../context/UserContextField";

const LoginForm = () => {
  const { fieldForm, setFieldForm } = useContext(UserContext);
  const { email, password } = fieldForm;

  return (
    <>
      <label htmlFor="email">*Email:</label>
      <InputField
        type="email"
        name="email"
        placeholder="email@example.com"
        value={email}
        required={true}
        onChange={(e) => handleInput(e, fieldForm, setFieldForm)}
      />
      <label htmlFor="password">*Password:</label>
      <InputField
        type="password"
        name="password"
        placeholder="******"
        value={password}
        required={true}
        minLength={6}
        onChange={(e) => handleInput(e, fieldForm, setFieldForm)}
      />
    </>
  );
};

export default LoginForm;
