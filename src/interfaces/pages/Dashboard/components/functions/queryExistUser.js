import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { app } from "../../../../../services/firebase/config";
import swal from "sweetalert";
import { useSelector } from "react-redux";
import addClass from "./addClassForm";

// @check if the user exists in the database
const QueryExistUser = () => {
  const user = useSelector((state) => state.user);
  const db = getFirestore(app);
  const { addClassForm } = addClass();

  const existUser = async (name, instructor, schedule) => {
    const usersRef = collection(db, "classes");
    // search email:
    const q = query(usersRef, where("email", "==", user.email));
    await getDocs(q)
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          swal(
            "Oops!",
            "There is already a registration in your name!",
            "error"
          );
        } else {
          addClassForm(name, instructor, schedule);
        }
      })
      .catch((error) => {
        console.error("Oops! error", error);
      });
  };

  return { existUser };
};

export default QueryExistUser;
