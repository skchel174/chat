import {createSlice} from "@reduxjs/toolkit";
import getChats from "./actions/getChats";
import getMessages from "./actions/getMessages";
import {formatDate} from "helpers/formatTime";

const chatsSlice = createSlice({
  name: "chats",

  initialState: {
    data: [],
    chatIdx: null,
    chatsStatus: null,
    messagesStatus: null,
  },

  reducers: {
    setChatIdx: (state, action) => {
      state.chatIdx = state.data.findIndex(chat => chat.id === action.payload.id);
    },

    addMessage: (state, action) => {
      const chat = state.data[state.chatIdx];

      const messageDate = formatDate(action.payload.message.datetime);

      const messagesGroup = chat.messages[chat.messages.length - 1];

      if (messagesGroup && messagesGroup.date === messageDate) {
        messagesGroup.messages.push(action.payload.message);
      } else {
        chat.messages.push({date: messageDate, messages: [action.payload.message]})
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getChats.pending, (state) => {
        state.chatsStatus = "chats.pending";
      })
      .addCase(getChats.fulfilled, (state, action) => {
        state.chatsStatus = "chats.fulfilled";
        state.data = action.payload.chats;
      })

      .addCase(getMessages.pending, (state) => {
        state.messagesStatus = "messages.pending";
      })
      .addCase(getMessages.fulfilled, (state, action) => {
        const chat = state.data[state.chatIdx];

        chat.messages = action.payload.messages.reduce((acc, message) => {
          const messageDate = formatDate(message.datetime);
          const idx = acc.findIndex(i => i.date === messageDate);

          if (idx === -1) {
            acc.push({date: messageDate, messages: [message]});
          } else {
            acc[idx].messages = [message, ...acc[idx].messages];
          }

          return acc;
        }, chat.messages ?? [])

        state.messagesStatus = "messages.fulfilled";
      })
  },
});

export const {
  setChatIdx,
  addMessage,
} = chatsSlice.actions;

export default chatsSlice.reducer;
