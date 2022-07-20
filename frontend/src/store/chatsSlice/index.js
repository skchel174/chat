import {createSlice} from "@reduxjs/toolkit";
import getChats from "./actions/getChats";
import getMessages from "./actions/getMessages";
import {formatDate} from "helpers/formatTime";

const chatsSlice = createSlice({
  name: "chats",

  initialState: {
    data: [],
    online: [],
    chatIdx: null,
    chatsStatus: null,
    messagesStatus: null,
  },

  reducers: {
    setOnline: (state, actions) => {
      state.online = actions.payload.users;
    },

    addOnline: (state, action) => {
      if (!state.online.includes(action.payload.user)) {
        state.online.push(action.payload.user);
      }
    },

    removeOnline: (state, action) => {
      const idx = state.online.findIndex(item => item === action.payload.user);
      state.online.splice(idx, 1);
    },

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
  setOnline,
  addOnline,
  removeOnline,
} = chatsSlice.actions;

export default chatsSlice.reducer;
