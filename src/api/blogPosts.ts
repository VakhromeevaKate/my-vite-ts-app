import apiClient from "./client";

export interface Category {
  id: string | number;
}

export type BlogPostStatus = "published" | "draft" | "rejected";

export interface BlogPost {
  id: number;
  title: string;
  content: string;
  category: Category;
  status: BlogPostStatus;
  createdAt?: string;
}

// GET /blog_posts — получение списка всех постов
export const getBlogPosts = async () => {
  return apiClient.get<BlogPost[]>("/blog_posts");
};

// GET /blog_posts/:id — получение поста по id
export const getBlogPostById = async (id: number) => {
  return apiClient.get<BlogPost>(`/blog_posts/${id}`);
};