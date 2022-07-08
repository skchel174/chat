import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import {configureStore, combineReducers} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import userReducer from "./userSlice";
import chatsReducer from "./chatsSlice";
import settingsReducer from "./settingsSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["settings"],
};

const rootReducer = combineReducers({
  user: userReducer,
  chats: chatsReducer,
  settings: settingsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
