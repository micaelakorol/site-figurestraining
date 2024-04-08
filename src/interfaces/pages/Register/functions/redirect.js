import { useNavigate } from "react-router-dom";
// directs to the dashboard when logged in correctly.
const Redirect = () => {
  const navigate = useNavigate();
  const redirectRoute = () => {
    setTimeout(() => {
      navigate("/login");
    }, 3000);
  };
  return { redirectRoute };
};
export default Redirect;