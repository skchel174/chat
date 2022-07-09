import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",

  initialState: {
    data: {
      id: 2,
      email: "mail@demo.test",
      login: "homer",
      name: "Homer Simpson",
      bio: "",
      img: "homer-simpson.jpeg",
      created_at: "2022-06-05 13:00:00",
      visited_at: "2022-06-11 17:38:56",
    },

    userRequestStatus: null,
  },
});

export default userSlice.reducer;
