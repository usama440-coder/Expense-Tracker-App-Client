import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: localStorage.getItem("user") || "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      localStorage.setItem("user", action.payload);
      state.name = localStorage.getItem("user");
    },
    clearUser: (state, action) => {
      localStorage.removeItem("user");
      state.name = "";
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
