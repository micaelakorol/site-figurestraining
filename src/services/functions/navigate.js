import { useNavigate } from "react-router-dom";
// directs to the dashboard when logged in correctly.
const Navigate = () => {
  const navigate = useNavigate();
  const navigateRoute = () => {
    setTimeout(() => {
      navigate("/dashboard");
    }, 2000);
  };
  return { navigateRoute };
};
export default Navigate;
