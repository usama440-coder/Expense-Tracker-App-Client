import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice";
import expenseReducer from "../slice/expenseSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    expense: expenseReducer,
  },
});

export default store;
