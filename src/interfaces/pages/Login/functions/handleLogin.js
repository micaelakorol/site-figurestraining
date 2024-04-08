import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useEffect } from "react";
import { loadingReducer } from "../../../../redux/loadingSlice";
import { UserContext } from "../../context/UserContextField";
import HandleMessagesLogin from "./handleMessagesLogin";
import { useDispatch } from "react-redux";
import { showToast } from "../../../../services/functions/messages";
import { CleanUp } from "../../../../services/functions/cleanUp";

export const HandleLogin = () => {
  const auth = getAuth();
  const { fieldForm } = useContext(UserContext);
  const { cleanUpState } = CleanUp();
  const { handleSuccessLogin, handleWarningLogin } = HandleMessagesLogin();
  const dispatch = useDispatch();
  const { email, password } = fieldForm;

  const handleFormLogin = async (e) => {
    dispatch(loadingReducer({ loading: true, disabled: true }));
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      // email no verified:
      if (!user.emailVerified) {
        return handleWarningLogin();
      } else {
        return handleSuccessLogin();
      }
    } catch (error) {
      showToast(error.message, "error");
      dispatch(loadingReducer({ loading: false }));
    }
  };
  useEffect(() => {
    return () => {
      cleanUpState();
    };
  }, []);
  return { handleFormLogin };
};
