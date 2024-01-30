import { injectable } from 'inversify';

import AppDataSource from '@/core/network/app.datasource';
import { AppResponse } from '@/core/domain/entities/response/app.response';
import { Order, OrderList } from '@/features/orders/domain/entities';

@injectable()
export class OrderDataSource extends AppDataSource {

	async getOrders(): Promise<AppResponse<OrderList>> {
		try {
			const r = await this.httpCLient
				.get<OrderList>('/shoppingcart/');
			return this.getResponse(r);
		} catch (e) {
			return this.getFailure(e);
		}
	}

	async getOrder(orderId: number): Promise<AppResponse<Order>> {
		try {
			const r = await this.httpCLient.get<Order>(`/shoppingcart/${orderId}`);
			return this.getResponse(r);
		} catch (e) {
			return this.getFailure(e);
		}
	}
}
