// store.js
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import api from "./api";
import playerSlice from "./playerSlice";

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  players: playerSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
