import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
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

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
