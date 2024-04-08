import { createSlice } from "@reduxjs/toolkit";

const initialStateLoading = {
  loading: false,
  disabled: false,
};

export const loadingSlice = createSlice({
  name: "loading",
  initialState: initialStateLoading,
  reducers: {
    loadingReducer: (state, action) => {
      const { loading, disabled } = action.payload;
      state.loading = loading;
      state.disabled = disabled;
    },
  },
});

export const { loadingReducer } = loadingSlice.actions;
export default loadingSlice.reducer;
