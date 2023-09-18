import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { itemsPerPage, itemsPerPageForCharacters } from '../helpers'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3004' }),
  endpoints: (builder) => ({
    getFilms: builder.query({
      query: () => `films`,
    }),
    getFilmById: builder.query({
      query: (id) => `films/${id}`,
    }),
    getFilmsWithPaginationAndSorting: builder.query({
      query: ({ page, sortOption }) => `films?_page=${page}&_limit=${itemsPerPage}&_sort=${sortOption}&_order=asc`,
    }),
    getCharacters: builder.query({
      query: () => `characters`,
    }),
    getCharacterById: builder.query({
      query: (id) => `characters/${id}`,
    }),
    getCharactersWithPagination: builder.query({
      query: (page) => `characters?_page=${page}&_limit=${itemsPerPageForCharacters}`,
    }),
    getPlanets: builder.query({
      query: () => `planets`,
    }),
    getPlanetById: builder.query({
      query: (id) => `planets/${id}`,
    }),
    getPlanetsWithPagination: builder.query({
      query: (page) => `planets?_page=${page}&_limit=${itemsPerPage}`,
    }),
    getSpecies: builder.query({
      query: () => `species`,
    }),
    getSpeciesById: builder.query({
      query: (id) => `species/${id}`,
    }),
    getSpeciesWithPagination: builder.query({
      query: (page) => `species?_page=${page}&_limit=${itemsPerPage}`,
    }),
    getVehicles: builder.query({
      query: () => `vehicles`,
    }),
    getVehicleById: builder.query({
      query: (id) => `vehicles/${id}`,
    }),
    getVehiclesWithPaginationAndSorting: builder.query({
      query: ({ page, sortOption }) => `vehicles?_page=${page}&_limit=${itemsPerPage}&_sort=${sortOption}&_order=asc`,
    }),
    getStarships: builder.query({
      query: () => `starships`,
    }),
    getStarshipById: builder.query({
      query: (id) => `starships/${id}`,
    }),
    getStarshipsWithPaginationAndSorting: builder.query({
      query: ({ page, sortOption }) => `starships?_page=${page}&_limit=${itemsPerPage}&_sort=${sortOption}&_order=asc`,
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
  useGetFilmsQuery,
  useGetFilmByIdQuery,
  useGetFilmsWithPaginationAndSortingQuery,
  useGetCharactersQuery,
  useGetCharacterByIdQuery,
  useGetCharactersWithPaginationQuery,
  useGetPlanetsQuery,
  useGetPlanetByIdQuery,
  useGetPlanetsWithPaginationQuery,
  useGetSpeciesQuery,
  useGetSpeciesByIdQuery,
  useGetSpeciesWithPaginationQuery,
  useGetVehiclesQuery,
  useGetVehicleByIdQuery,
  useGetVehiclesWithPaginationAndSortingQuery,
  useGetStarshipsQuery,
  useGetStarshipByIdQuery,
  useGetStarshipsWithPaginationAndSortingQuery,
  usePostContactMutation,
} = apiSlice
