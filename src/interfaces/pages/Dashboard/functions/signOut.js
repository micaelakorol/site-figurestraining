import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { currentUser, userIsLogged } from "../../../../redux/userSlice";

export const SignOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signOutSesion = async () => {

    dispatch(userIsLogged({ isLogged: false }));
    dispatch(currentUser(undefined));
    navigate("/");
  };
  return signOutSesion;
};
