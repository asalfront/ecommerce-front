export interface Customer {
	id: number;
	first_name?: string;
	last_name?: string;
	email: string;
	password: string;
	is_active: boolean;
	billing_address?: string;
	shipping_address?: string;
}

export interface CustomerForm {
	first_name?: string;
	last_name?: string;
	email: string;
	password: string;
	is_active: boolean;
	billing_address?: string;
	shipping_address?: string;
	
}

export interface FavoriteList {
   id: string;
}

 
export type CustomerResponse = AppResponse<Customer>;
export type CustomerListResponse = AppResponse<Customer[]>;
export type CustomerFavoriteListResponse = AppResponse<unknown>;
