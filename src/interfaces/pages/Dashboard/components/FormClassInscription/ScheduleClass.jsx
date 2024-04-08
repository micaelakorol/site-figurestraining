import { Inscription } from "../../../../../styles/SelectClasses";
import { currentTime } from "../functions/currentDate";
import queryExistUser from "../functions/queryExistUser";
const ScheduleClass = ({ dayClasses, item }) => {
  const { existUser } = queryExistUser();
  return (
    <>
      {dayClasses.map((schedule) => (
        <ul key={schedule.id}>
          <li className="day">{schedule.day}</li>
          <li>{schedule.time}</li>
          {currentTime < schedule.time ? (
            <Inscription
              onClick={() => existUser(item.name, item.instructor, schedule)}
            >
              Inscription
            </Inscription>
          ) : (
            <p>Closed❌</p>
          )}
        </ul>
      ))}
    </>
  );
};
export default ScheduleClass;
