import apiClient from "./client";

export interface Category {
    id: number;
    title: string;
}

// GET /categories — получение списка всех категорий
export const getUsers = async () => {
  return apiClient.get<Category[]>('/categories');
};

// GET /categories/id — получение категорий по id
export const getUserById = async (id: number) => {
  return apiClient.get<Category>(`/categories/${id}`);
};