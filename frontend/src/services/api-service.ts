import { AppConstants } from "@/core/app-constants";
import {
  categoryResponse,
  templateResponse,
} from "@/models/response/api-response";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiService = createApi({
  reducerPath: "ApiService",
  baseQuery: fetchBaseQuery({
    baseUrl: AppConstants.baseUrl,
    mode: "cors",
    cache: "no-cache",
  }),
  tagTypes: ["ApiService"],
  endpoints: (build) => ({
    getCategories: build.query<categoryResponse, void>({
      query: () => ({
        url: "/getCategories",
        method: "GET",
      }),
      providesTags: ["ApiService"],
    }),
    getTemplates: build.query<templateResponse, void>({
      query: () => ({
        url: "/getTemplates",
        method: "GET",
      }),
      providesTags: ["ApiService"],
    }),
  }),
});

export const { useGetCategoriesQuery, useGetTemplatesQuery } = apiService;
