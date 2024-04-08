const ObtainUserProfile = () => {
// capture fields photoURL, displayName:
  const handleChangeUpdateProfile = (e, userProfile, setUserProfile) => {
    const { name, value } = e.target;
    setUserProfile({
      ...userProfile,
      [name]: value,
    });
  };

  return { handleChangeUpdateProfile };
};

export default ObtainUserProfile;
