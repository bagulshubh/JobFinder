import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDetails:null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
    setUserDetails(state, value) {
      state.userDetails = value.payload;
    },
  },
});

export const {setUserDetails} = profileSlice.actions;

export default profileSlice.reducer;
