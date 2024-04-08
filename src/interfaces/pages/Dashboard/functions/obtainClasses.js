import { useContext } from "react";
import { getDatabase, onValue, ref } from "firebase/database";
import { UserContext } from "../../context/UserContextField";
// get the class schedule
const ObtainClasses = () => {
  const { setDataClass } = useContext(UserContext);
  const db = getDatabase();
  const showClasses = () => {
    onValue(ref(db, "gym_classes"), (snapshot) => {
      const allClasses = snapshot.val();
      setDataClass(allClasses);
    });
  };

  return { showClasses };
};

export default ObtainClasses;
