import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    userSignedIn: (user, action) => {
      user.push(action.payload);
    },
    userSignedOut: (user, action) => {
      user.pop();
    },
  },
});

export const { userSignedIn, userSignedOut } = slice.actions;

export default slice.reducer;
