import { inject, injectable } from 'inversify';

import type { OrderRepository } from '../repositories';
import { Order, OrderList } from '@/features/orders/domain/entities';
import { AppResponse } from '@/core/domain/entities/response/';
import TYPES from '@/core/hooks/di/di.types';

export interface IOrder {
	getOrders(): Promise<AppResponse<OrderList>>;
	getOrder(_id: number): Promise<AppResponse<Order>>;
}

@injectable()
export class OrderUseCase implements IOrder {
	private orderRepository: OrderRepository;

	constructor(@inject(TYPES.OrderRepository) orderRepository: OrderRepository) {
		this.orderRepository = orderRepository;
	}
	async getOrders(): Promise<AppResponse<OrderList>> {
		return await this.orderRepository.getOrders();
	}
	async getOrder(id: number): Promise<AppResponse<Order>> {
		return await this.orderRepository.getOrder(id);
	}
}
