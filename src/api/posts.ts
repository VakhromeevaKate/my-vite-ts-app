import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.fake-rest.refine.dev',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Тип данных для поста
export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export const postsApi = {
  getAll: async (): Promise<Post[]> => {
    const response = await apiClient.get<Post[]>('/posts');
    return response.data;
  },
  getOne: async (id: number): Promise<Post> => {
    const response = await apiClient.get<Post>(`/posts/${id}`);
    return response.data;
  },
  create: async (data: Omit<Post, 'id'>): Promise<Post> => {
    const response = await apiClient.post<Post>('/posts', data);
    return response.data;
  },
  update: async (id: number, data: Partial<Post>): Promise<Post> => {
    const response = await apiClient.put<Post>(`/posts/${id}`, data);
    return response.data;
  },
  delete: async (id: number): Promise<void> => {
    await apiClient.delete(`/posts/${id}`);
  },
};