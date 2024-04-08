import { useContext, useEffect } from "react";
import {
  Classes,
  ContainerSelect,
  Items,
} from "../../../../../styles/SelectClasses";
import { currentDay } from "../functions/currentDate";
import ScheduleClass from "./ScheduleClass";
import ObtainClasses from "../../functions/obtainClasses";
import { useSelector } from "react-redux";
import { UserContext } from "../../../context/UserContextField";
const ClassForm = () => {
  const user = useSelector((state) => state.user);
  const { dataClass } = useContext(UserContext);
  const { showClasses } = ObtainClasses();

  useEffect(() => {
    showClasses();
  }, []);
  
  return (
    <>
      {/** if the user filled in at least his name: */}
      {user.displayName !== null ? (
        <ContainerSelect as="main">
          {/** filters classes based on the current day. */}
          {dataClass?.map((item) => {
            const dayClasses = item.schedules.filter(
              (schedule) => schedule.day === currentDay
            );
            return (
              dayClasses.length > 0 && (
                <Classes key={item.id}>
                  <Items>Profesor: {item.instructor}</Items>
                  <Items>{item.name}</Items>
                  <ScheduleClass dayClasses={dayClasses} item={item} />
                </Classes>
              )
            );
          })}
        </ContainerSelect>
      ) : (
        <ContainerSelect>
          {/** If you have not completed your profile details: */}
          <Items>Fill in your details to register..</Items>
        </ContainerSelect>
      )}
      {/* form */}
    </>
  );
};

export default ClassForm;
