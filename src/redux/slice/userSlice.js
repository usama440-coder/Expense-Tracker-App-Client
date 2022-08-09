import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const localName = localStorage.setItem("user", action.payload);
      state.name = localName;
    },
    clearUser: (state, action) => {
      localStorage.removeItem("user");
      state.name = "";
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
