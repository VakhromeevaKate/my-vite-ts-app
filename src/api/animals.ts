import axios from 'axios';

// 1. Базовый клиент
const apiClient = axios.create({
  baseURL: 'https://api.fake-rest.refine.dev',
  headers: {
    'Content-Type': 'application/json',
  },
});

// 2. Типы (интерфейс для животного)
export interface Animal {
  id: number;
  name: string;
  type: string;
  category: string;
  status: string;
  // ... можешь добавить другие поля, если они есть в API
}

// 3. Методы для работы с /animals
export const animalsApi = {
  // Получить всех
  getAll: async (): Promise<Animal[]> => {
    const response = await apiClient.get<Animal[]>('/animals');
    return response.data;
  },

  // Получить одного по ID
  getOne: async (id: number): Promise<Animal> => {
    const response = await apiClient.get<Animal>(`/animals/${id}`);
    return response.data;
  },

  // Создать новое животное
  create: async (data: Omit<Animal, 'id'>): Promise<Animal> => {
    const response = await apiClient.post<Animal>('/animals', data);
    return response.data;
  },

  // Обновить существующее
  update: async (id: number, data: Partial<Animal>): Promise<Animal> => {
    const response = await apiClient.put<Animal>(`/animals/${id}`, data);
    return response.data;
  },

  // Удалить
  delete: async (id: number): Promise<void> => {
    await apiClient.delete(`/animals/${id}`);
  },
};
