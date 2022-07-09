import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import chatsReducer from "./chatsSlice";
import settingsReducer from "./settingsSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    chats: chatsReducer,
    settings: settingsReducer,
  },
});
