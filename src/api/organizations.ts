import apiClient from './client';

export interface Organization {
    id: number,
    slug: string,
    name: string,
    email: string,
    country: string,
    address: string,
    owner_name: string,
    owner_email: string,
    userIds: number [],
  }

export const getOrganizations = async () => {
  return apiClient.get<Organization[]>('./organizations');
};

export const getOrganizationById = async (id: number) => {
  return apiClient.get<Organization>(`/organizations/${id}`);
};