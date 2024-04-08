import { Inputs } from "../../styles/Login";

export const InputField = ({
  name,
  value,
  onChange,
  placeholder,
  type,
  required,
}) => {
  return (
    <Inputs
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      required={required}
    />
  );
};
