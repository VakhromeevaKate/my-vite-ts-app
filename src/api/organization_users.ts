import apiClient from "./client";

export interface OrganizationUser {
  id: number;
  name: string;
  email: string;
  organizations: number[];
}

export const getOrganizationUsers = async (): Promise<OrganizationUser[]> => {
  const response = await apiClient.get<OrganizationUser[]>("/organization_users");
  return response.data; 
};

export const getOrganizationUserById = async (id: number): Promise<OrganizationUser> => {
  const response = await apiClient.get<OrganizationUser>(`/organization_users/${id}`);
  return response.data;
};