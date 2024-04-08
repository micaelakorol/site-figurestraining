import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { currentUser, userIsLogged } from "../../../../redux/userSlice";

export const SignOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signOutSesion = () => {
    dispatch(userIsLogged({ isLogged: false }));
  dispatch(currentUser(null));
  navigate("/");
  }
  return signOutSesion
};
