import PageIndex from "../../components/PageIndex";
import "react-toastify/dist/ReactToastify.css";
import LoginRender from "../Login/LoginRender";
import RenderRegister from "../Register/RenderRegister";
import Dashboard from "../Dashboard/Dashboard";
import Error from "../Error/Error";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import UserProfile from "../EditUserProfile/UserProfile";
import ResetPasswordForm from "../PasswordReset/ResetPasswordForm";
import Payments from "../Payments/Payments";
export const router = createBrowserRouter([
  {
    errorElement: <Error />,
    children: [
      {
        element: <PrivateRoutes />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/edit-profile-user",
            element: <UserProfile />,
          },
          {
            path: "/payments",
            element: <Payments />,
          },
        ],
      },
      {
        path: "/",
        element: <PageIndex />,
      },
      {
        path: "/*",
        element: <Error />,
      },
      {
        path: "/register",
        element: <RenderRegister />,
      },
      {
        path: "/login",
        element: <LoginRender />,
      },
      {
        path: "/reset",
        element: <ResetPasswordForm />,
      }
    ],
  },
]);
