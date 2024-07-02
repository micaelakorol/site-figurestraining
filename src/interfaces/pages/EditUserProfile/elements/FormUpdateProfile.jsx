import { InputField } from "../../../reusable/InputField";
import { ContainerForm, Form } from "../../../../styles/Login";
import { ToastContainer } from "react-toastify";
import obtainUserProfile from "../functions/obtainUserProfile";
import ButtonUpdate from "./ButtonUpdate";
import { useContext } from "react";
import { UserContext } from "../../context/UserContextField";
import updateProfileUser from "../functions/updateProfile";
import { getAuth } from "firebase/auth";

/**User personal information */
const FormUpdateProfile = () => {
  const { handleChangeUpdateProfile } = obtainUserProfile();
  const { handleUpdateProfile } = updateProfileUser();
  const { userProfile, setUserProfile } = useContext(UserContext);
  const { displayName, photoURL } = userProfile;
  const auth = getAuth();
  const user = auth.currentUser;

  return (
    <ContainerForm>
      <Form
        className="editForm"
        onSubmit={(e) => handleUpdateProfile(e, userProfile)}
      >
        <label htmlFor="displayName">*FullName</label>
        <InputField
          type="text"
          placeholder="Fullname"
          value={displayName}
          name="displayName"
          required
          onChange={(e) =>
            handleChangeUpdateProfile(e, userProfile, setUserProfile)
          }
        />
        <label htmlFor="photoURL">URL Photo</label>
        <InputField
          type="text"
          id="photoURL"
          placeholder="photoURL"
          value={photoURL}
          name="photoURL"
          onChange={(e) =>
            handleChangeUpdateProfile(e, userProfile, setUserProfile)
          }
        />
        {!user.email === null ? <ButtonUpdate /> : null}

        <ToastContainer
          position="top-center"
          hideProgressBar={false}
          theme="colored"
        />
      </Form>
    </ContainerForm>
  );
};

export default FormUpdateProfile;
