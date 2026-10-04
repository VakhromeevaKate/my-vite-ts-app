import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.fake-rest.refine.dev',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Оставляем интерфейс Animal, но поля теперь как у постов
export interface Animal {
  id: number;
  name: string;      // это будет title из API
  description: string; // это будет body из API
  category: string;
}

export const animalsApi = {
  getAll: async (): Promise<Animal[]> => {
    // Запрашиваем /posts, потому что /animals сломан
    const response = await apiClient.get('/posts');
    return response.data.map((post: any) => ({
      id: post.id,
      name: post.title,
      description: post.body,
      category: 'Пост', // просто для вида
    }));
  },
  getOne: async (id: number): Promise<Animal> => {
    const response = await apiClient.get(`/posts/${id}`);
    return {
      id: response.data.id,
      name: response.data.title,
      description: response.data.body,
      category: 'Пост',
    };
  },
};