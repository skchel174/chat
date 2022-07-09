import {createAsyncThunk} from "@reduxjs/toolkit";
import api from "api";
import localStorage from "helpers/localStorage";

const logout = createAsyncThunk(
  "user/logout",
  async () => {
    const response = await api.user.logout();
    localStorage.remove("token");
  }
);

export default logout;
