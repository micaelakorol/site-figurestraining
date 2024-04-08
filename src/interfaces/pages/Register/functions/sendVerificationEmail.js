import { getAuth, sendEmailVerification } from "firebase/auth";
import { showToast } from "../../../../services/functions/messages";
// Send a verification email when registering
  export const sendVerificationEmail = () => {
    const auth = getAuth();
    sendEmailVerification(auth.currentUser)
      .then(() => {
        showToast("check your email", "success");
      })
      .catch((error) => {
        showToast("Error sending verification email", error, "error");
      });
  };


