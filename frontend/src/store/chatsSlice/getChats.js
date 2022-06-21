import {createAsyncThunk} from "@reduxjs/toolkit";
import api from "api";

const getChats = createAsyncThunk(
  'chats/getChats',
  async () => {
    const chats = await api.chats.getItems();

    return {
      chats,
    };
  },
);

export default getChats;
