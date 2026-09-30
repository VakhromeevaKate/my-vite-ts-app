import apiClient from "./client";

export interface Tag {
    id: number;
    title: string;
}

// GET /tags — получение списка всех тегов
export const getTags = async () => {
    return apiClient.get<Tag[]>('/tags');
};

// GET /tags/id — получение тега по id
export const getTagById = async (id: number) => {
    return apiClient.get<Tag>(`/tags/${id}`);
};
