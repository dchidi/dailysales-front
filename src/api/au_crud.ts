// src/api/crud.ts
import apiClient from "./axios";
import { api_au_graph_data } from "./routes";

export const fetchAUSalesGraphAllProd = async () => {
  const graph_url = api_au_graph_data("2024-09-01", "2024-09-13");
  const response = await apiClient.get(graph_url);
  return response.data;
};

// export const fetchItemById = async (id: number) => {
//   const response = await apiClient.get(`/items/${id}`);
//   return response.data;
// };

// export const createItem = async (data: any) => {
//   const response = await apiClient.post("/items", data);
//   return response.data;
// };

// export const updateItem = async (id: number, data: any) => {
//   const response = await apiClient.put(`/items/${id}`, data);
//   return response.data;
// };

// export const deleteItem = async (id: number) => {
//   const response = await apiClient.delete(`/items/${id}`);
//   return response.data;
// };
