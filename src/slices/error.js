import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    errorMessage:"",
};

const errorSlice = createSlice({
  name: "error",
  initialState: initialState,
  reducers: {
    setError(state, value) {
      state.errorMessage = value.payload;
    }
  },
});

export const {setError } = errorSlice.actions;

export default errorSlice.reducer;
