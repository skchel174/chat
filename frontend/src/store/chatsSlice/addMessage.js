import {createAsyncThunk} from "@reduxjs/toolkit";
import moment from "moment";

const getMessages = createAsyncThunk(
  'chats/addMessages',
  async (text, {getState}) => {
    const state = getState();

    const message = {
      id: (new Date).getTime(),
      chatId: state.chats.selectedChat,
      authorId: state.user.data.id,
      date: moment().format("YYYY-MM-DD"),
      time: moment().format("hh:mm"),
      text,
    }

    return {
      message,
    };
  },
);

export default getMessages;