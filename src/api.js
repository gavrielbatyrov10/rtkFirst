import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL =
  "https://fsa-puppy-bowl.herokuapp.com/api/2401-fsa-et-web-ft-sf-/players/";
const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getPlayers: builder.query({
      query: () => "players", // Corrected URL path for fetching players
    }),
    addPlayer: builder.mutation({
      query: (player) => ({
        url: "players", // Corrected URL path for adding a player
        method: "POST",
        body: player,
      }),
    }),
  }),
  tagTypes: ["players"],
});

export const { useGetPlayersQuery, useAddPlayerMutation } = api;
export default api;
