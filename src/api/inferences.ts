// src/api/inferences.ts
import apiClient from './client';

export interface InferenceUser {
  id: number;
}

export interface Inference {
  id: number;
  title: string;
  slug: string;
  content: string;
  hit: number;
  topic_id: number;
  user: InferenceUser;
}

// GET /inferences получение списка всех inferences
export const getInferences = async () => {
  return apiClient.get<Inference[]>('/inferences');
};

// GET /inferences/:id — получение одного inference
export const getInferenceById = async (id: number) => {
  return apiClient.get<Inference>(`/inferences/${id}`);
};