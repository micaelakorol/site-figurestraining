import { getAuth, updateProfile } from "firebase/auth";
import Navigate from "../../../../services/functions/navigate";
import { showToast } from "../../../../services/functions/messages";
import { useDispatch } from "react-redux";
import { currentUser } from "../../../../redux/userSlice";
const UpdateProfileUser = () => {
  const dispatch = useDispatch();
  const auth = getAuth();
  const { navigateRoute } = Navigate();

  const handleUpdateProfile = (e, userProfile) => {
    e.preventDefault();
    // update redux state:
    dispatch(
      currentUser({
        displayName: userProfile.displayName,
        photoURL: userProfile.photoURL,
      })
    );
    // update profile current user:
    updateProfile(auth.currentUser, {
      displayName: userProfile.displayName,
      photoURL: userProfile.photoURL,
    })
      .then(() => {
        showToast("Update perfil", "success");
        navigateRoute();
      })
      .catch((error) => {
        showToast("Could not update your profile", error, "error");
      });
  };

  return { handleUpdateProfile };
};

export default UpdateProfileUser;
