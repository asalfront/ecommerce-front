export interface User {
	id: number;
	first_name?: string;
	last_name?: string;
	email: string;
	password?: string;
	role: string;
	last_login?: string;
}

export interface UserForm {
	first_name?: string;
	last_name?: string;
	email: string;
	password?: string;
	role: string;
	last_login?: string;
}
 
export type UserResponse = AppResponse<User>;
export type UserListResponse = AppResponse<User[]>;
export type UserFavoriteListResponse = AppResponse<unknown>;

