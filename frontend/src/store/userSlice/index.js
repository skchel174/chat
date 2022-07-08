import {createSlice} from "@reduxjs/toolkit";
import changeSettings from "./changeSettings";

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

    settings: {
      theme: "system",
      fontSize: 16,
      timeFormat: "24",
      keyboard: "enter",
      color: "#e5ddd5",
      tmpColor: null,
      defaultWallpapers: true,
    },
  },

  extraReducers: {
    [changeSettings.fulfilled]: (state, action) => {
      state.settings = {...state.settings, ...action.payload.settings};
    },
  },
});

export default userSlice.reducer;
