import { client } from './client';

// тип данных 

export interface Category {

id: number;

title: string;

}

// клиент

export const categoriesApi = {

// все категории

getAll: async (): Promise<Category[]> => {

const response = await client.get<Category[]>('/categories');

return response.data;

},

// категория по ID)

getOne: async (id: number): Promise<Category> => {

const response = await client.get<Category>(`/categories/${id}`);

return response.data;

},

// новая

create: async (data: Omit<Category, 'id'>): Promise<Category> => {

const response = await client.post<Category>('/categories', data);

return response.data;

},

// обновление

update: async (id: number, data: Partial<Category>): Promise<Category> => {

const response = await client.put<Category>(`/categories/${id}`, data);

return response.data;

},

// удаление категории

delete: async (id: number): Promise<void> => {

await client.delete(`/categories/${id}`);

},

};
