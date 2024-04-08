import { getAuth,onAuthStateChanged } from "firebase/auth";
import  { useEffect } from "react";
import { currentUser } from "../../redux/userSlice";
import { useDispatch } from "react-redux";

export const useAuthVerify = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          dispatch(
            currentUser({
              email: user.email,
              emailVerified: user.emailVerified,
              uid: user.uid,
              displayName: user.displayName,
              photoURL: user.photoURL,
            })
          );
        }
      },
      (error) => {
        console.error(error);
      }
    );

    return () => unsubscribe();
  }, []);
};

