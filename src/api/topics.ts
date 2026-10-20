import apiClient from "./client";

export interface Topic {
    id: number,
    title: string,
}

export const getTopics = async () => {
  return apiClient.get<Topic[]>('/topics');
};

export const getTopicById = async (id: number) => {
  return apiClient.get<Topic>(`/topics/${id}`);
};