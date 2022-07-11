import {createSlice} from "@reduxjs/toolkit";
import login from "./actions/login";
import register from "./actions/register";
import authorize from "./actions/authorize";

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

    resetState: (state) => {
      state.token = null;
      state.data = null;
      state.requestStatus = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.requestStatus = "login.pending";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.requestStatus = "login.fulfilled";
        state.data = action.payload.data.user;
        state.token = action.payload.data.token;
      })

      .addCase(register.pending, (state) => {
        state.requestStatus = "register.pending";
      })
      .addCase(register.fulfilled, (state, action) => {
        state.requestStatus = "register.fulfilled";
        state.data = action.payload.data.user;
        state.token = action.payload.data.token;
      })

      .addCase(authorize.pending, (state) => {
        state.requestStatus = "auth.pending";
      })
      .addCase(authorize.fulfilled, (state, action) => {
        state.requestStatus = "auth.fulfilled";
        state.data = action.payload.user;
      })
  },
});

export const {
  saveToken,
  resetState,
} = userSlice.actions;

export default userSlice.reducer;
