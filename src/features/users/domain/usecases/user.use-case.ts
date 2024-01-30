import { inject, injectable } from 'inversify';

import type { UserRepository } from '@/features/users/domain/repositories';
import { User, UserForm, UserListResponse, UserResponse } from '@/features/users/domain/entities';
import TYPES from '@/core/hooks/di/di.types';

export interface IUser {
	createUser(user: UserForm): Promise<UserResponse>;
	getUsers(): Promise<UserListResponse>;
	updateUser(id: number, user: User): Promise<UserResponse>;
	deleteUser(id: number): Promise<UserResponse>;
	getUser(id: number): Promise<UserResponse>;
	getFavoriteList(shoppingCartId: number): Promise<unknown>;
	getShoppingCart(): Promise<unknown>;
}

@injectable()
export class UserUseCase implements IUser {
	private userRepository: UserRepository;

	constructor(@inject(TYPES.UserRepository) userRepository: UserRepository) {
		this.userRepository = userRepository;
	}
	async createUser(user: UserForm): Promise<UserResponse> {
		return await this.userRepository.createUser(user);
	}
	async getUsers(): Promise<UserListResponse> {
		return await this.userRepository.getUsers();
	}
	async updateUser(id: number, user: User): Promise<UserResponse> {
		return await this.userRepository.updateUser(id, user);
	}
	async deleteUser(id: number): Promise<UserResponse> {
		return await this.userRepository.deleteUser(id);
	}
	async getUser(id: number): Promise<UserResponse> {
		return await this.userRepository.getUser(id);
	}
	async getFavoriteList(shoppingCartId: number): Promise<unknown> {
		return await this.userRepository.getFavoriteList(shoppingCartId);
	}
	async getShoppingCart(): Promise<unknown> {
		return await this.userRepository.getShoppingCart();
	}
}
