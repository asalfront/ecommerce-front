import { Customer, CustomerListResponse, CustomerResponse, CustomerFavoriteListResponse } from '@/features/customers/domain/entities';

export interface CustomerRepository {
	createCustomer(_customer: Customer): Promise<CustomerResponse>;
	getCustomers(): Promise<CustomerListResponse>;
	updateCustomer(_id: number, _customer: Customer): Promise<CustomerResponse>;
	deleteCustomer(_id: number): Promise<CustomerResponse>;
	getCustomer(_id: number): Promise<CustomerResponse>;
	getFavoriteList(_id: number): Promise<CustomerFavoriteListResponse>;
}
