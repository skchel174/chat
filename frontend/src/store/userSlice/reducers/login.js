import {createAsyncThunk} from "@reduxjs/toolkit";
import api from "api";
import localStorage from "helpers/localStorage";

const login = createAsyncThunk(
  "user/login",
  async ({login, password, remember}) => {
    const data = await api.user.login(login, password);

    if (remember) {
      localStorage.set("token", data.token);
    }

    return {data};
  }
);

export default login;
