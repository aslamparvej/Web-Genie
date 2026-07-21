import type {
  GenerateSitePayload,
  GenerateSiteResponse,
} from "../../types/site.types";

export const siteApi = {
  generate: (
    post: <T>(url: string, data?: unknown) => Promise<T>,
    payload: GenerateSitePayload
  ) => {
    return post<GenerateSiteResponse>("/site", payload);
  },

  getAll: (
    get: <T>(url: string) => Promise<T>
  ) => {
    return get("/site");
  },

  getById: (
    get: <T>(url: string) => Promise<T>,
    id: string
  ) => {
    return get(`/site/${id}`);
  },

  update: (
    put: <T>(url: string, data?: unknown) => Promise<T>,
    id: string,
    payload: unknown
  ) => {
    return put(`/site/${id}`, payload);
  },

  delete: (
    remove: <T>(url: string) => Promise<T>,
    id: string
  ) => {
    return remove(`/site/${id}`);
  },
};