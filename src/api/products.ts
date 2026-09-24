// src/api/products.ts
import apiClient from './client';

export interface ProductCategory {
    id: number;
}

// Тип продукта, соответствующий ответу API
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  material: string;
  category: ProductCategory;
}

// GET /products — получение списка всех продуктов
export const getProducts = async () => {
  return apiClient.get<Product[]>('/products');
};

// Опционально: GET /products/:id — получение одного продукта
export const getProductById = async (id: number) => {
  return apiClient.get<Product>(`/products/${id}`);
};