import { useDispatch } from "react-redux";
import { showToast } from "../../../../services/functions/messages";
import { userIsLogged } from "../../../../redux/userSlice";
import Navigate from "../../../../services/functions/navigate";
import { loadingReducer } from "../../../../redux/loadingSlice";

const HandleMessagesLogin = () => {
  const dispatch = useDispatch();
  const { navigateRoute } = Navigate();

  const handleSuccessLogin = () => {
    showToast("Logging in..", "success");
    dispatch(userIsLogged({ isLogged: true }));
    navigateRoute();
  };
  const handleWarningLogin = () => {
    showToast("You must verify the email to access", "warning");
    dispatch(loadingReducer({ loading: false }));
  };
  return {handleSuccessLogin, handleWarningLogin };
};
export default HandleMessagesLogin;
