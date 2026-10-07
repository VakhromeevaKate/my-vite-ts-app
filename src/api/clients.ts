// src/api/clients.ts
// Тимашёв Михаил, гр. 640-02
import apiClient from './client';

export interface Client {
  id: number;
  name: string;
  owner_name: string;
  owner_email: string;
  country: string;
  address: string;
  phone: string;
  organization: number;
}

// GET /clients — получение списка клиентов
export const getClients = async () => {
  return apiClient.get<Client[]>('/clients');
};

// Опционально: GET /clients/:id — получение клиента по id
export const getClientById = async (id: number) => {
  return apiClient.get<Client>(`/clients/${id}`);
};