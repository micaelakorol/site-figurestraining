import { createSlice } from "@reduxjs/toolkit";

const initialStateUser = {
  displayName: "",
  email: "",
  emailVerified: false,
  isLogged: false,
  uid: "",
  photoURL: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialStateUser,
  reducers: {
    currentUser: (state, action) => {
      const { email, emailVerified, uid, displayName, photoURL } =
        action.payload;
      if (email !== undefined) {
        state.email = email;
      }
      if (emailVerified !== undefined) {
        state.emailVerified = emailVerified;
      }
      if (uid !== undefined) {
        state.uid = uid;
      }
      if (displayName !== undefined) {
        state.displayName = displayName;
      }
      if (photoURL !== undefined) {
        state.photoURL = photoURL;
      }
    },
    userIsLogged: (state, action) => {
      const { isLogged } = action.payload;
      state.isLogged = isLogged;
    },
  },
});

export const { currentUser, userIsLogged } = userSlice.actions;
export default userSlice.reducer;
