export interface Order {
	description: string;
	name: string;
	id: number;
	subcategories: number[];
}

export type OrderList = Order[];
