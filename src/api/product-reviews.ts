import apiClient from "./client";

export interface ReviewUser {
  id: number;
}

export interface ReviewProduct {
  id: number;
}

export interface Review {
  id: number;
  rating: number;
  comment: string;
  user: ReviewUser;
  product: ReviewProduct;
}

// GET /reviews — получение списка всех отзывов
export const getReviews = async () => {
  return apiClient.get<Review[]>('/reviews');
};

// GET /reviews/id — получение отзыва по id
export const getReviewById = async (id: number) => {
  return apiClient.get<Review>(`/reviews/${id}`);
};

// GET /products/id/reviews — получение отзывов по конкретному продукту
export const getProductReviews = async (productId: number) => {
  return apiClient.get<Review[]>(`/products/${productId}/reviews`);
};
