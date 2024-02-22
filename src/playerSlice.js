import api from "./api";

const playerApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPlayers: builder.query({
      query: () => "/players",
      providesTags: ["Players"],
    }),
  }),
});
export const { useGetPlayersQuery } = playerApi;
