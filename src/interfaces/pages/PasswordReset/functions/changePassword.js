import { useContext, useEffect } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import Navigate from "../../../../services/functions/navigate";
import { showToast } from "../../../../services/functions/messages";
import { useDispatch } from "react-redux";
import { loadingReducer } from "../../../../redux/loadingSlice";
import { UserContext } from "../../context/UserContextField";

const ChangePassword = () => {
  const { fieldForm } = useContext(UserContext);
  const { email } = fieldForm;
  const { navigateRoute } = Navigate();
  const auth = getAuth();
  const dispatch = useDispatch();

  const handleReset = (e) => {
    e.preventDefault();
    dispatch(loadingReducer({ loading: true, disabled: true }));
    sendPasswordResetEmail(auth, email)
      .then(() => {
        showToast("Password reset email sent!", "success");
        navigateRoute();
      })
      .catch((error) => {
        showToast("error sending verification email", error.code, "error");
        dispatch(loadingReducer({ loading: false }));
      });
  };
  useEffect(() => {
    return () => {
      dispatch(loadingReducer({ loading: false }));
    };
  }, []);
  return { handleReset };
};

export default ChangePassword;
