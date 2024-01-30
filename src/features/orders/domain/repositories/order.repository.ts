import { AppResponse } from '@/core/domain/entities/response/';
import { Order, OrderList } from '@/features/orders/domain/entities';

export interface OrderRepository {
	getOrders(): Promise<AppResponse<OrderList>>;
	getOrder(orderId: number): Promise<AppResponse<Order>>;
}
