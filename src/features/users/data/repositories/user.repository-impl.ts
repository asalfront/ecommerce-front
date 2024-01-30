import { inject, injectable } from 'inversify';

import TYPES from '@/core/hooks/di/di.types';
import { User, UserForm, UserListResponse, UserResponse } from '@/features/users/domain/entities';
import { UserRepository } from '@/features/users/domain/repositories';
import { UserDataSource } from '@/features/users/data/datasources';

@injectable()
export class UserRepositoryImpl implements UserRepository {
	private userDataSource: UserDataSource;

	constructor(@inject(TYPES.UserDataSource) userDataSource: UserDataSource) {
		this.userDataSource = userDataSource;
	}
	async createUser(user: UserForm): Promise<UserResponse> {
		return await this.userDataSource.createUser(user);
	}
	async getUsers(): Promise<UserListResponse> {
		return await this.userDataSource.getUsers();
	}
	async updateUser(id: number, user: User): Promise<UserResponse> {
		return await this.userDataSource.updateUser(id, user);
	}
	async deleteUser(id: number): Promise<UserResponse> {
		return await this.userDataSource.deleteUser(id);
	}
	async getUser(id: number): Promise<UserResponse> {
		return await this.userDataSource.getUser(id);
	}
	async getFavoriteList(shoppingCartId: number): Promise<UserResponse> {
		return await this.userDataSource.getFavoritesList(shoppingCartId);
	}
	async getShoppingCart(): Promise<UserResponse> {
		return await this.userDataSource.getShoppingCart();
	}
}
