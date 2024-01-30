export interface Profile {
	createdAt: string;
  email: string;
  first_name: string;
  id: number;
  isActive: boolean;
  last_name?: string;
  status: string;
	updatedAt: string;
  phone: string;
}

export interface ProfileForm {
  email?: string;
  first_name?: string;
  last_Name?: string;
  phone?: string;
}

export interface Commets {
	id: number;
	product_name: string;
	user_name: string;
	description: string;
	qualification: number;
	product: number;
	user: number;
}

export type CommetsListResponse = AppResponse<Commets[]>;
