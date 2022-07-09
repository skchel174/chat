import {createSlice} from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  name: "settings",

  initialState: {
    data: {
      theme: "system",
      fontSize: 16,
      timeFormat: "24",
      keyboard: "enter",
      color: "#e5ddd5",
      tmpColor: null,
      defaultWallpapers: true,
    },
  },

  reducers: {
    changeSettings: (state, action) => {
      state.data = {...state.data, ...action.payload};
    },
  },
});

export const {
  changeSettings,
} = settingsSlice.actions;

export default settingsSlice.reducer;
