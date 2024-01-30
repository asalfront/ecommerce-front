import { injectable } from 'inversify';

import { AppResponse } from '@/core/domain/entities/response/app.response';
import AppDataSource from '@/core/network/app.datasource';
import { Credentials, ResetPasswordForm, RecoverPasswordForm } from '../../domain/entities';
import { Data } from '@/core/domain/entities/response/data';

@injectable()
export class AuthDataSource extends AppDataSource {
	async login(params: Credentials): Promise<AppResponse> {
		try {
			const r = await this.httpCLient.post<Data>('/auth/login/', params);
			return this.getResponse(r);
		} catch (e) {
			return this.getFailure(e);
		}
	}

	async recoverPassword(params: RecoverPasswordForm): Promise<AppResponse> {
		try {
			const r = await this.httpCLient.post<Data>('auth/password_reset/', params);
			return this.getResponse(r);
		} catch (e) {
			return this.getFailure(e);
		}
	}

	async resetPassword(params: ResetPasswordForm): Promise<AppResponse> {
		try {
			const r = await this.httpCLient.post<Data>('/auth/password-reset/', params);
			return this.getResponse(r);
		} catch (e) {
			return this.getFailure(e);
		}
	}
}
