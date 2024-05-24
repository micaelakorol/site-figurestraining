import { Inputs } from "../../styles/Login";

export const InputField = ({
  name,
  value,
  onChange,
  placeholder,
  type,
  required,minLength
}) => {
  return (
    <Inputs
      name={name}
      value={value}
      onChange={onChange}
      minLength={minLength}
      placeholder={placeholder}
      type={type}
      required={required}
    />
  );
};
