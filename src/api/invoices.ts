import apiClient from "./client";

export interface InvoiceService {
    title: string;
    unitPrice: number;
    quantity: number;
    discount: number;
    totalPrice: number;
}

export interface Invoice {
    id: number;
    name: string;
    date: string;
    company: number;
    discount: number;
    tax: number;
    contact: number;
    total: number;
    missions: number[];
    services: InvoiceService[];
    subTotal: number;
    organization: number;
    client: number;
}

// GET /invoices — получение списка всех счетов
export const getInvoices = async () => {
    return apiClient.get<Invoice[]>('/invoices');
};

// GET /invoices/:id — получение счёта по id
export const getInvoiceById = async (id: number) => {
    return apiClient.get<Invoice>(`/invoices/${id}`);
};

// POST /invoices — создание нового счёта
export const createInvoice = async (data: Omit<Invoice, 'id'>) => {
    return apiClient.post<Invoice>('/invoices', data);
};

// PUT /invoices/:id — полное обновление счёта
export const updateInvoice = async (id: number, data: Partial<Invoice>) => {
    return apiClient.put<Invoice>(`/invoices/${id}`, data);
};

// DELETE /invoices/:id — удаление счёта
export const deleteInvoice = async (id: number) => {
    return apiClient.delete(`/invoices/${id}`);
};