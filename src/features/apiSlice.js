import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { itemsPerPage, itemsPerPageForCharacters } from '../helpers'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3004',
  }),
  endpoints: (builder) => ({
    getFilmById: builder.query({
      query: (id) => `films/${id}`,
    }),
    getFilmsWithPaginationAndSorting: builder.query({
      query: ({ page, sortOption }) => `films?_page=${page}&_limit=${itemsPerPage}&_sort=${sortOption}&_order=asc`,
      transformResponse: (response, meta) => {
        const total = parseInt(meta.response.headers.get('X-Total-Count'), 10)
        return { data: response, total }
      },
    }),
    getCharacterById: builder.query({
      query: (id) => `characters/${id}`,
    }),
    getCharactersWithPagination: builder.query({
      query: (page) => `characters?_page=${page}&_limit=${itemsPerPageForCharacters}`,
      transformResponse: (response, meta) => {
        const total = parseInt(meta.response.headers.get('X-Total-Count'), 10)
        return { data: response, total }
      },
    }),
    getPlanetById: builder.query({
      query: (id) => `planets/${id}`,
    }),
    getPlanetsWithPagination: builder.query({
      query: (page) => `planets?_page=${page}&_limit=${itemsPerPage}`,
      transformResponse: (response, meta) => {
        const total = parseInt(meta.response.headers.get('X-Total-Count'), 10)
        return { data: response, total }
      },
    }),
    getSpeciesById: builder.query({
      query: (id) => `species/${id}`,
    }),
    getSpeciesWithPagination: builder.query({
      query: (page) => `species?_page=${page}&_limit=${itemsPerPage}`,
      transformResponse: (response, meta) => {
        const total = parseInt(meta.response.headers.get('X-Total-Count'), 10)
        return { data: response, total }
      },
    }),
    getVehicleById: builder.query({
      query: (id) => `vehicles/${id}`,
    }),
    getVehiclesWithPaginationAndSorting: builder.query({
      query: ({ page, sortOption }) => `vehicles?_page=${page}&_limit=${itemsPerPage}&_sort=${sortOption}&_order=asc`,
      transformResponse: (response, meta) => {
        const total = parseInt(meta.response.headers.get('X-Total-Count'), 10)
        return { data: response, total }
      },
    }),
    getStarshipById: builder.query({
      query: (id) => `starships/${id}`,
    }),
    getStarshipsWithPaginationAndSorting: builder.query({
      query: ({ page, sortOption }) => `starships?_page=${page}&_limit=${itemsPerPage}&_sort=${sortOption}&_order=asc`,
      transformResponse: (response, meta) => {
        const total = parseInt(meta.response.headers.get('X-Total-Count'), 10)
        return { data: response, total }
      },
    }),
    postContact: builder.mutation({
      query: (query) => ({
        url: 'contacts',
        method: 'POST',
        body: query,
      }),
    }),
  }),
})

export const {
  useGetFilmByIdQuery,
  useGetFilmsWithPaginationAndSortingQuery,
  useGetCharacterByIdQuery,
  useGetCharactersWithPaginationQuery,
  useGetPlanetByIdQuery,
  useGetPlanetsWithPaginationQuery,
  useGetSpeciesByIdQuery,
  useGetSpeciesWithPaginationQuery,
  useGetVehicleByIdQuery,
  useGetVehiclesWithPaginationAndSortingQuery,
  useGetStarshipByIdQuery,
  useGetStarshipsWithPaginationAndSortingQuery,
  usePostContactMutation,
} = apiSlice
