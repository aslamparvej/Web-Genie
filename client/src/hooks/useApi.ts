import { useAuth } from "@clerk/react";
import API from "../services/api/axios";

export const useApi = () => {
  const { getToken } = useAuth();

  const request = async <T>(
    method: "get" | "post" | "put" | "patch" | "delete",
    url: string,
    data?: unknown,
  ): Promise<T> => {
    const token = await getToken();

    const response = await API.request<T>({
      method,
      url,
      data,
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    });

    return response.data;
  };

  return {
    get: <T>(url: string) => request<T>("get", url),

    post: <T>(url: string, data?: unknown) => request<T>("post", url, data),

    put: <T>(url: string, data?: unknown) => request<T>("put", url, data),

    patch: <T>(url: string, data?: unknown) => request<T>("patch", url, data),

    delete: <T>(url: string) => request<T>("delete", url),
  };
};
