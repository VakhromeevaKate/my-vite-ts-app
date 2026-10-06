// src/api/posts_tma.ts
import apiClient from './client';

export interface PostCategory {
    id: number;
}

// Тип поста, соответствующий ответу API
export interface Post {
    id: number;
    title: string;
    content: string;
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