import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setToken(state, value) {
      state.token = value.payload;
    },
    setloading(state,value) {
      state.loading = value.payload;
    }
  },
});

export const {setToken , setloading } = authSlice.actions;

export default authSlice.reducer;
