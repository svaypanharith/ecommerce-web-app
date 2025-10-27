import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { StorageResponse, ColorsResponse } from "./data-type";
import { API_URL } from "@/utils/env";

const dataSlice = createApi({
  reducerPath: "data",
  baseQuery: fetchBaseQuery({ 
    baseUrl: API_URL,
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      headers.set('Accept', 'application/json');
      return headers;
    },
  }),
  tagTypes: ["Storage", "Colors"],
  endpoints: (builder) => ({
   
    getStorages: builder.query<StorageResponse[], void>({
      query: () => ({
        url: `${API_URL}/storages`,
        method: "GET",
      }),
      providesTags: ["Storage"],
    }),

    getStorageById: builder.query<StorageResponse, string>({
      query: (id) => ({
        url: `${API_URL}/storages/${id}`,
        method: "GET",
      }),
      providesTags: ["Storage"],
    }),

    createStorage: builder.mutation<
      StorageResponse,
      Omit<StorageResponse, "id">
    >({
      query: (data) => ({
        url: `${API_URL}/storages`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Storage"],
    }),

    updateStorage: builder.mutation<
      StorageResponse,
      { id: string; data: Partial<Omit<StorageResponse, "id">> }
    >({
      query: ({ id, data }) => ({
        url: `${API_URL}/storages/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Storage"],
    }),

    deleteStorage: builder.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `${API_URL}/storages/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Storage"],
    }),


    getColors: builder.query<ColorsResponse[], void>({
      query: () => ({
        url: `${API_URL}/colors`,
        method: "GET",
      }),
      providesTags: ["Colors"],
    }),

    getColorById: builder.query<ColorsResponse, string>({
      query: (id) => ({
        url: `${API_URL}/colors/${id}`,
        method: "GET",
      }),
      providesTags: ["Colors"],
    }),

    createColor: builder.mutation<ColorsResponse, Omit<ColorsResponse, "id">>({
      query: (data) => ({
        url: `${API_URL}/colors`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Colors"],
    }),

    updateColor: builder.mutation<
      ColorsResponse,
      { id: string; data: Partial<Omit<ColorsResponse, "id">> }
    >({
      query: ({ id, data }) => ({
        url: `${API_URL}/colors/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Colors"],
    }),

    deleteColor: builder.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `${API_URL}/colors/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Colors"],
    }),
  }),
});

export default dataSlice;

export const {
  useGetStoragesQuery,
  useGetStorageByIdQuery,
  useCreateStorageMutation,
  useUpdateStorageMutation,
  useDeleteStorageMutation,
  useGetColorsQuery,
  useGetColorByIdQuery,
  useCreateColorMutation,
  useUpdateColorMutation,
  useDeleteColorMutation,
} = dataSlice;
