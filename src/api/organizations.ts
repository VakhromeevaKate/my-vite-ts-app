import apiClient from "./client";

export interface Organization {
    id: number;
    slug: string;
    name: string;
    email: string;
    country: string;
    address: string;
    phone: string;
    owner_name: string;
    owner_email: string;
    userIds: number[];
}

// получение списка всех организаций
export const getOrganizations = async () => {
    return apiClient.get<Organization[]>('/organizations');
};

// получение организации по id
export const getOrganizationById = async (id: number) => {
    return apiClient.get<Organization>(`/organizations/${id}`);
};

// создание новой организации
export const createOrganization = async (data: Omit<Organization, 'id'>) => {
    return apiClient.post<Organization>('/organizations', data);
};

// полное обновление организации
export const updateOrganization = async (id: number, data: Partial<Organization>) => {
    return apiClient.put<Organization>(`/organizations/${id}`, data);
};

// удаление организации
export const deleteOrganization = async (id: number) => {
    return apiClient.delete(`/organizations/${id}`);
};