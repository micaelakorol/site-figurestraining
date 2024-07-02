import { ContainerDashboard, ContainerPerfil } from "../../../styles/Dashboard";
import ClassForm from "./components/FormClassInscription/ClassForm";
import PhotoURL from "./elements/PhotoURL";
import ActionDashboardBtn from "./elements/ActionDashboardBtn";
import BtnSupport from "../Login/elements/BtnSupport";
import { useSelector } from "react-redux";
import { getAuth } from "firebase/auth";

const Dashboard = () => {
  const user = useSelector((state) => state.user);
  const auth = getAuth();
  const currentUser = auth.currentUser;

  return (
    <>
      <ContainerDashboard>
        <ContainerPerfil>
          <PhotoURL user={user} />
          <b>
            ¡Hello!{" "}
            {currentUser.email === null ? (
              <abbr title="Anonymous users have limited functions">Anonymous</abbr>
            ) : (
              user.displayName
            )}
          </b>
        </ContainerPerfil>
        {/* Btn edit and close session */}
        <ActionDashboardBtn />
      </ContainerDashboard>
      {/**  shows the classes according to the current day  */}
      <ClassForm />
      <BtnSupport />
    </>
  );
};

export default Dashboard;
