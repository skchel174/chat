import {createSlice} from "@reduxjs/toolkit";
import login from "./reducers/login";
import register from "./reducers/register";
import authorize from "./reducers/authorize";
import logout from "./reducers/logout";

const userSlice = createSlice({
  name: "user",

  initialState: {
    token: null,
    data: null,
    requestStatus: null,
  },

  reducers: {
    saveToken: (state, action) => {
      state.token = action.payload.token;
    },
  },

  extraReducers: {
    [login.pending]: (state) => {
      state.requestStatus = "login.pending";
    },

    [login.fulfilled]: (state, action) => {
      state.requestStatus = "login.fulfilled";
      state.data = action.payload.data.user;
      state.token = action.payload.data.token;
    },

    [register.pending]: (state) => {
      state.requestStatus = "register.pending";
    },

    [register.fulfilled]: (state, action) => {
      state.requestStatus = "register.fulfilled";
      state.data = action.payload.data.user;
      state.token = action.payload.data.token;
    },

    [authorize.pending]: (state) => {
      state.requestStatus = "auth.pending";
    },

    [authorize.fulfilled]: (state, action) => {
      state.requestStatus = "auth.fulfilled";
      state.data = action.payload.user;
    },

    [logout.fulfilled]: (state) => {
      state.token = null;
      state.data = null;
      state.requestStatus = null;
    },
  },
});

export const {
  saveToken,
} = userSlice.actions;

export default userSlice.reducer;
