import { injectable } from 'inversify';
import { serialize } from 'object-to-formdata';

import AppDataSource from '@/core/network/app.datasource';
import { User, UserResponse, UserListResponse, UserForm } from '@/features/users/domain/entities';
import { Data } from '@/core/domain/entities/response/data';

@injectable()
export class UserDataSource extends AppDataSource {
	async createUser(user: UserForm): Promise<UserResponse> {
		try {
			const r = await this.httpCLient
				.post<User>('/users/', serialize(user));
			return this.getResponse(r);
		} catch (e) {
			return this.getFailure(e);
		}
	}

	async getUsers(): Promise<UserListResponse> {
		try {
			const r = await this.httpCLient
				.get<User[]>('/users/');
			return this.getResponse(r);
		} catch (e) {
			return this.getFailure(e);
		}
	}

	async updateUser(userId: number, user: User): Promise<UserResponse> {
		try {
			const formData = serialize({
				...user,
			});
			const r = await this.httpCLient.patch<Data>(`/users/${userId}/`, formData);
			return this.getResponse(r);
		} catch (e) {
			return this.getFailure(e);
		}
	}

	async getUser(userId: number): Promise<UserResponse> {
		try {
			const r = await this.httpCLient.get<User>(`/users/${userId}/`);
			return this.getResponse(r);
		} catch (e) {
			return this.getFailure(e);
		}
	}

	async deleteUser(userId: number): Promise<UserResponse> {
		try {
			const r = await this.httpCLient.delete<Data>(`/users/${userId}/`);
			return this.getResponse(r);
		} catch (e) {
			return this.getFailure(e);
		}
	}

	async getFavoritesList(shoppingCartId: number): Promise<unknown> {
		try {
			const r = await this.httpCLient.get<User>(`/shoppingcart/${shoppingCartId}/`);
			return this.getResponse(r);
		} catch (e) {
			return this.getFailure(e);
		}
	}


	async getShoppingCart(): Promise<unknown> {
		try {
			const r = await this.httpCLient.get<User>('/shoppingcart/user/');
			return this.getResponse(r);
		} catch (e) {
			return this.getFailure(e);
		}
	}
}
