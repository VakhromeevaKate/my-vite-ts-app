import apiClient from './client';

export interface ReviewUser {
  id: number;
}

export interface ReviewProduct {
  id: number;
}

export interface ProductReview {
  id: number;
  rating: number;
  comment: string;
  user: ReviewUser;
  product: ReviewProduct;
}

// получение всех отзывов
export const getProductReviews = async () => {
  return apiClient.get<ProductReview[]>('/product-reviews');
};

// получение одного по id
export const getProductReviewById = async (id: number) => {
  return apiClient.get<ProductReview>(`/product-reviews/${id}`);
};