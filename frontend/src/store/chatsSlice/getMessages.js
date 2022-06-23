import {createAsyncThunk} from "@reduxjs/toolkit";
import api from "api";

const getMessages = createAsyncThunk(
  'chats/getMessages',
  async (_, {getState}) => {
    const {chats} = getState();

    console.log("request messages; chat id: " + chats.selectedChat)

    const messages = await api.chats.getMessages(chats.selectedChat);

    return {
      chatId: chats.selectedChat,
      messages,
    };
  },
);

export default getMessages;
