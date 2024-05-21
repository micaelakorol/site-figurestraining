import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import HandleMessagesLogin from "./handleMessagesLogin";
import { showToast } from "../../../../services/functions/messages";

export const HandleLoginGooogle = () => {
  const { handleSuccessLogin, handleWarningLogin } = HandleMessagesLogin();
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const loginGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user);
        if (!user) {
          handleWarningLogin();
        } else {
          handleSuccessLogin();
        }
      })
      .catch((error) => {
        const credential = GoogleAuthProvider.credentialFromError(error);
        showToast(error.message, credential, "error");
        // ...
      });
  };
  return { loginGoogle };
};
