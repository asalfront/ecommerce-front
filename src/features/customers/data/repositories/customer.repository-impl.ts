import { inject, injectable } from 'inversify';

import TYPES from '@/core/hooks/di/di.types';
import { Customer, CustomerFavoriteListResponse, CustomerListResponse, CustomerResponse } from '@/features/customers/domain/entities';
import { CustomerRepository } from '@/features/customers/domain/repositories';
import { CustomerDataSource } from '@/features/customers/data/datasources';

@injectable()
export class CustomerRepositoryImpl implements CustomerRepository {
	private customerDataSource: CustomerDataSource;

	constructor(@inject(TYPES.CustomerDataSource) customerDataSource: CustomerDataSource) {
		this.customerDataSource = customerDataSource;
	}
	async createCustomer(customer: Customer): Promise<CustomerResponse> {
		return await this.customerDataSource.createCustomer(customer);
	}
	async getCustomers(): Promise<CustomerListResponse> {
		return await this.customerDataSource.getCustomers();
	}
	async updateCustomer(id: number, customer: Customer): Promise<CustomerResponse> {
		return await this.customerDataSource.updateCustomer(id, customer);
	}
	async deleteCustomer(id: number): Promise<CustomerResponse> {
		return await this.customerDataSource.deleteCustomer(id);
	}
	async getCustomer(id: number): Promise<CustomerResponse> {
		return await this.customerDataSource.getCustomer(id);
	}
	async getFavoriteList(id: number): Promise<CustomerFavoriteListResponse> {
		return await this.customerDataSource.getFavoritesList(id);
	}	
}
