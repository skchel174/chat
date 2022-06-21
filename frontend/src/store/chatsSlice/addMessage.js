import {createAsyncThunk} from "@reduxjs/toolkit";
import moment from "moment";

const getMessages = createAsyncThunk(
  'chats/addMessages',
  async (text, {getState}) => {
    const state = getState();

    const message = {
      id: (new Date).getTime(),
      chatId: state.chats.selectedChat,
      author: {id: 2, name: 'Homer Simpson', img: 'john-doe-avatar.png'},
      text,
      date: moment().format("YYYY-MM-DD"),
      time: moment().format("hh:mm")
    }

    return {
      message,
    };
  },
);

export default getMessages;