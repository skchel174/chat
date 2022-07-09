import {createSlice} from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  name: "settings",

  initialState: {
    theme: "system",
    fontSize: 16,
    timeFormat: "24",
    keyboard: "enter",
    color: "#e5ddd5",
    tmpColor: null,
    defaultWallpapers: true,
  },

  reducers: {
    setFontSize: (state, action) => {
      state.fontSize = action.payload.fontSize;
    },

    setTheme: (state, action) => {
      state.theme = action.payload.theme;
    },

    setTimeFormat: (state, action) => {
      state.timeFormat = action.payload.timeFormat;
    },

    setKeyboard: (state, action) => {
      state.keyboard = action.payload.keyboard;
    },

    setColor: (state, action) => {
      state.color = action.payload.color;
    },

    setTmpColor: (state, action) => {
      state.tmpColor = action.payload.tmpColor;
    },

    toggleDefaultWallpapers: (state, action) => {
      state.defaultWallpapers = action.payload.defaultWallpapers;
    },
  },
});

export const {
  setFontSize,
  setTheme,
  setTimeFormat,
  setKeyboard,
  setColor,
  setTmpColor,
  toggleDefaultWallpapers,
} = settingsSlice.actions;

export default settingsSlice.reducer;
