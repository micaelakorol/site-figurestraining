import React from "react";
import HandleMessagesLogin from "./handleMessagesLogin";
import { showToast } from "../../../../services/functions/messages";
import { getAuth, signInAnonymously } from "firebase/auth";

const UserAnonymous = () => {
  const auth = getAuth();
  const { handleSuccessLogin } = HandleMessagesLogin();

  const handleAnonymous = async () => {
    await signInAnonymously(auth)
      .then(() => {
        handleSuccessLogin();
      })
      .catch((errorMessage) => {
        showToast(errorMessage, "error");
      });
  };

  return { handleAnonymous };
};

export default UserAnonymous;
