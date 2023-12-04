import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data:{
        jobs:0,
        candidates:0,
        companies:[],
        accepted:0,
        hires:0
    }
};

const countSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setdata(state, value) {
      state.data = value.payload;
    },
  },
});

export const {setdata } = countSlice.actions;

export default countSlice.reducer;
