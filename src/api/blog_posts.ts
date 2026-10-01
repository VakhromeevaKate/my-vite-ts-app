import apiClient from "./client";

export interface BlogCategory {
    id: number;
    title: string;
    content: string;
    status: string;
    categoryID: number;
    createdAt: string;
}
// GET /categories — получение списка всех категорий
export const getblogcategory = async () => {
  return apiClient.get<BlogCategory[]>('/blogcategories');
};

// GET /categories/id — получение категорий по id
export const getblogcategoryById = async (id: number) => {
  return apiClient.get<BlogCategory>(`/blogcategories/${id}`);
};

