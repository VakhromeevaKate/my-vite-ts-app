import apiClient from "./client";

export interface Category {
  id: number;
  title: string;
}

export const getCategories = async () => {
  return apiClient.get<Category[]>('/categories');
};

export const getCategoryById = async (id: number) => {
  return apiClient.get<Category>(`/categories/${id}`);
};