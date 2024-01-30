import { inject, injectable } from 'inversify';

import type { CustomerRepository } from '@/features/customers/domain/repositories';
import { Customer, CustomerListResponse, CustomerResponse } from '@/features/customers/domain/entities';
import TYPES from '@/core/hooks/di/di.types';

export interface ICustomer {
	createCustomer(customer: Customer): Promise<CustomerResponse>;
	getCustomers(): Promise<CustomerListResponse>;
	updateCustomer(id: number, customer: Customer): Promise<CustomerResponse>;
	deleteCustomer(id: number): Promise<CustomerResponse>;
	getCustomer(id: number): Promise<CustomerResponse>;
}

@injectable()
export class CustomerUseCase implements ICustomer {
	private customerRepository: CustomerRepository;

	constructor(@inject(TYPES.CustomerRepository) customerRepository: CustomerRepository) {
		this.customerRepository = customerRepository;
	}
	async createCustomer(customer: Customer): Promise<CustomerResponse> {
		return await this.customerRepository.createCustomer(customer);
	}
	async getCustomers(): Promise<CustomerListResponse> {
		return await this.customerRepository.getCustomers();
	}
	async updateCustomer(id: number, customer: Customer): Promise<CustomerResponse> {
		return await this.customerRepository.updateCustomer(id, customer);
	}
	async deleteCustomer(id: number): Promise<CustomerResponse> {
		return await this.customerRepository.deleteCustomer(id);
	}
	async getCustomer(id: number): Promise<CustomerResponse> {
		return await this.customerRepository.getCustomer(id);
	}
}
