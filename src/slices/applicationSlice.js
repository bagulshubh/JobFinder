import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    applications:null,
    currApp:null,
};

const applicationSlice = createSlice({
  name: "application",
  initialState: initialState,
  reducers: {
    setAppilication(state, value) {
      state.applications = value.payload;
    },
    setCurrApp(state,value){
      state.currApp = value.payload
    }
  },
});

export const {setAppilication ,setCurrApp } = applicationSlice.actions;

export default applicationSlice.reducer;
