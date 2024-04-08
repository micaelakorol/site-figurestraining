import { useContext } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { sendVerificationEmail } from "./sendVerificationEmail";
import { showToast } from "../../../../services/functions/messages";
import { useDispatch } from "react-redux";
import { loadingReducer } from "../../../../redux/loadingSlice";
import { UserContext } from "../../context/UserContextField";
import { app } from "../../../../services/firebase/config";
import Redirect from "./redirect";

export const RegisterValidation = () => {
  const { fieldForm } = useContext(UserContext);
  const { redirectRoute } = Redirect();
  const dispatch = useDispatch();
  const { email, password, repeatPassword } = fieldForm;
  const auth = getAuth(app);
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/;

  const validationsInput = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      if (passwordRegex.test(password)) {
        dispatch(loadingReducer({ loading: true, disabled: true }));
        try {
          await createUserWithEmailAndPassword(auth, email, password);
          // verify email entered:
          sendVerificationEmail();
          showToast("User successfully registered", "success");
          redirectRoute();
        } catch (error) {
          showToast(error.message, "error");
          dispatch(loadingReducer({ loading: false, disabled: false }));
        }
      } else {
        showToast(
          "The password must have a capital letter, letters, and numbers",
          "warning"
        );
      }
    } else {
      showToast("Passwords must be the same", "warning");
    }
  };
  return { validationsInput };
};
