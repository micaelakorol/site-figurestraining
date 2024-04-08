import { defectImage } from "../../../../assets/variables";

const PhotoURL = ({ user }) => {
  return (
    <img
      src={
        user.photoURL == null || user.photoURL === ""
          ? defectImage
          : user.photoURL
      }
      className="userPhoto"
      alt="user"
    />
  );
};

export default PhotoURL;
