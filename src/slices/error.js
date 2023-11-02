import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    error:"",
};

const errorSlice = createSlice({
  name: "error",
  initialState: initialState,
  reducers: {
    setError(state, value) {
      state.error = value.payload;
    }
  },
});

export const {setError } = errorSlice.actions;

export default errorSlice.reducer;
