import apiClient from "./client";

export interface Language {
    id: number;
    title: string;
}
// GET /languages — получение всез языков
export const getLanguages = async () => {
    return apiClient.get<Language[]>('/languages');
};

// Опционально: GET //:id — получение языка по его id
export const getLanguageById = async (id: number) => {
    return apiClient.get<Language>(`/languages/${id}`);
};