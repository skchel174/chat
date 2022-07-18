import {createAsyncThunk} from "@reduxjs/toolkit";
import api from "api";

const getChats = createAsyncThunk(
  'chats/getChats',
  async ({userId}) => {
    const chats = await api.chats.getItems(userId);

    return {
      chats,
    };
  },
);

export default getChats;
