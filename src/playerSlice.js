import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "./api";

export const getPlayers = createAsyncThunk("players/getPlayers", async () => {
  const response = await api.getPlayers();
  return response.data;
});

const playerSlice = createSlice({
  name: "players",
  initialState: [],
  reducers: {
    addPlayer: (state, action) => {
      state.push(action.payload);
    },
    removePlayer: (state, action) => {
      return state.filter((player) => player.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPlayers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { addPlayer, removePlayer } = playerSlice.actions;

export default playerSlice;
