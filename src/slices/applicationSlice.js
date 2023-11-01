import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    applications:null,
};

const applicationSlice = createSlice({
  name: "application",
  initialState: initialState,
  reducers: {
    setAppilication(state, value) {
      state.applications = value.payload;
    },
  },
});

export const {setAppilication } = applicationSlice.actions;

export default applicationSlice.reducer;
