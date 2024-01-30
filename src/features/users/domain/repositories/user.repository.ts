import { User, UserResponse, UserListResponse, UserForm } from '@/features/users/domain/entities';

export interface UserRepository {
	createUser(_user: UserForm): Promise<UserResponse>;
	getUsers(): Promise<UserListResponse>;
	updateUser(_id: number, _customer: User): Promise<UserResponse>;
	deleteUser(_id: number): Promise<UserResponse>;
	getUser(_id: number): Promise<UserResponse>;
	getFavoriteList(shoppingCartId: number): Promise<unknown>;
	getShoppingCart(): Promise<unknown>;
}
