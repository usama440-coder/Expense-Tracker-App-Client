import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import SERVER_URL from "../../utils";

const initialState = {
  loading: true,
  data: {},
  error: "",
};

const expenseSlice = createSlice({
  name: "expense",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchExpenses.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchExpenses.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(fetchExpenses.rejected, (state, action) => {
        state.error = "Something went wrong";
        state.loading = false;
      });
  },
});

export const fetchExpenses = createAsyncThunk("expenses/fetch", async () => {
  const res = await axios.get(`${SERVER_URL}/expense`, {
    withCredentials: true,
  });
  return res.data;
});

export const { setExpenses, isLoading } = expenseSlice.actions;
export default expenseSlice.reducer;
