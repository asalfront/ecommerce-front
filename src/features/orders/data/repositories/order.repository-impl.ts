import { inject, injectable } from 'inversify';

import TYPES from '@/core/hooks/di/di.types';
import { AppResponse } from '@/core/domain/entities/response/';
import { OrderDataSource } from '@/features/orders/data/datasources';
import { Order, OrderList } from '@/features/orders/domain/entities';
import { OrderRepository } from '@/features/orders/domain/repositories';

@injectable()
export class OrderRepositoryImpl implements OrderRepository {
	private orderDataSource: OrderDataSource;

	constructor(@inject(TYPES.OrderDataSource) orderDataSource: OrderDataSource) {
		this.orderDataSource = orderDataSource;
	}
	async getOrders(): Promise<AppResponse<OrderList>> {
		return await this.orderDataSource.getOrders();
	}
	async getOrder(orderId: number): Promise<AppResponse<Order>> {
		return await this.orderDataSource.getOrder(orderId);
	}
}
