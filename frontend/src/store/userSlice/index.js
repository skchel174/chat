import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",

  initialState: {
    data: {
      id: 2,
      name: "Homer Simpson",
    },

    userRequestStatus: null,
  },
});

export default userSlice.reducer;
