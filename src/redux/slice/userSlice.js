import { createSlice } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const initialState = {
  name: cookies.get("user") || "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
