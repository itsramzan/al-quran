import apiSlice from "../api/apiSlice";

const suraApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllSuraInfo: builder.query({
      query: () => ({
        url: "/info",
        method: "GET",
      }),
      keepUnusedDataFor: 1800,
    }),
    getSura: builder.query({
      query: (id) => ({
        url: `/sura/${id}`,
        method: "GET",
      }),
      keepUnusedDataFor: 1800,
    }),
  }),
});

export default suraApi;
export const { useGetAllSuraInfoQuery, useGetSuraQuery } = suraApi;
