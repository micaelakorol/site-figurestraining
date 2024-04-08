import { useDispatch } from "react-redux";
import { initialFields } from "../../interfaces/pages/context/data/initialFields";
import { UserContext } from "../../interfaces/pages/context/UserContextField";
import { useContext } from "react";
import { loadingReducer } from "../../redux/loadingSlice";

export const CleanUp = () => {
  const { setFieldForm } = useContext(UserContext);
  const dispatch = useDispatch();
  const cleanUpState = () => {
    setFieldForm(initialFields);
    dispatch(loadingReducer({ loading: false, disabled: false }));
  };
  return { cleanUpState };
};
