import { collection, addDoc, getFirestore } from "firebase/firestore";
import swal from "sweetalert";
import { app } from "../../../../../services/firebase/config";
import { useSelector } from "react-redux";

const AddClass = () => {
  const user = useSelector((state) => state.user);
  const db = getFirestore(app);
  const addClassForm = async (name, instructor, schedule) => {
    try {
      await addDoc(collection(db, "classes"), {
        class: name,
        nameInstructor: instructor,
        schedule: schedule,
        idUser: user.uid,
        email: user.email,
        displayName: user.displayName,
      });
      swal("Good job!", "Successfully registered!", "success");
    } catch (e) {
      swal("Error", "Could not register", "error");
    }
  };
  return { addClassForm };
};

export default AddClass;
