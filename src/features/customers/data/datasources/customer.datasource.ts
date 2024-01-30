import { injectable } from 'inversify';
import { serialize } from 'object-to-formdata';

import AppDataSource from '@/core/network/app.datasource';
import { Customer, CustomerResponse, CustomerListResponse, CustomerFavoriteListResponse } from '@/features/customers/domain/entities';
import { Data } from '@/core/domain/entities/response/data';

@injectable()
export class CustomerDataSource extends AppDataSource {
	async createCustomer(customer: Customer): Promise<CustomerResponse> {
		try {
			const r = await this.httpCLient
				.post<Customer>('/customers/', serialize(customer));
			return this.getResponse(r);
		} catch (e) {
			return this.getFailure(e);
		}
	}

	async getCustomers(): Promise<CustomerListResponse> {
		try {
			const r = await this.httpCLient
				.get<Customer[]>('/customers/');
			return this.getResponse(r);
		} catch (e) {
			return this.getFailure(e);
		}
	}

	async updateCustomer(customerId: number, customer: Customer): Promise<CustomerResponse> {
		try {
			const formData = serialize({
				...customer,
			});
			const r = await this.httpCLient.patch<Data>(`/customers/${customerId}/`, formData);
			return this.getResponse(r);
		} catch (e) {
			return this.getFailure(e);
		}
	}

	async getCustomer(customerId: number): Promise<CustomerResponse> {
		try {
			const r = await this.httpCLient.get<Customer>(`/customers/${customerId}/`);
			return this.getResponse(r);
		} catch (e) {
			return this.getFailure(e);
		}
	}

	async deleteCustomer(customerId: number): Promise<CustomerResponse> {
		try {
			const r = await this.httpCLient.delete<Data>(`/customers/${customerId}/`);
			return this.getResponse(r);
		} catch (e) {
			return this.getFailure(e);
		}
	}

	async getFavoritesList(customerId: number): Promise<CustomerFavoriteListResponse> {
		try {
			const r = await this.httpCLient.get<Customer>(`/user/${customerId}/`);
			return this.getResponse(r);
		} catch (e) {
			return this.getFailure(e);
		}
	}
}
