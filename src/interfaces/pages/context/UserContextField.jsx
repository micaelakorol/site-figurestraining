import { createContext, useState } from "react";
import { initialFields, initialUpdatePerfil } from "./data/initialFields";
import { useAuthVerify } from "../../../services/hook/useAuthVerify";

const UserContext = createContext();

const UserContextField = ({ children }) => {
  const [fieldForm, setFieldForm] = useState(initialFields);
  // update user profile.
  const [userProfile, setUserProfile] = useState(initialUpdatePerfil);
  const [dataClass, setDataClass] = useState([]);
  useAuthVerify()
  return (
    <UserContext.Provider
      value={{
        fieldForm,
        setFieldForm,
        userProfile,
        setUserProfile,
        dataClass,
        setDataClass,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export { UserContext, UserContextField };
