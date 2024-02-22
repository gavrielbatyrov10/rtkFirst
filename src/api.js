import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL =
  "https://fsa-puppy-bowl.herokuapp.com/api/2401-fsa-et-web-ft-sf-gavriel";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: () => ({}),
  tagTypes: ["players"],
});

export default api;
