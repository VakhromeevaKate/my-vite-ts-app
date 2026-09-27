// src/api/posts.ts
import apiClient from './client';

export interface PostCategory {
    id: number;
    title: string;
}

// Тип поста, соответствующий ответу API
export interface Post {
    id: number;
    title: string;
    body: string;
    slug: string;
    createdAt: string;
    category: PostCategory;
}

// GET /posts – получение списка всех постов
export const getPosts = async () => {
    return apiClient.get<Post[]>('/posts');
};

// Опционально: GET /posts/:id – получение одного поста
export const getPostById = async (id: number) => {
    return apiClient.get<Post>(`/posts/${id}`);
};