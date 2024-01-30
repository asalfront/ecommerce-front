import { injectable, inject } from 'inversify';

import { AuthRepository } from '../../domain/repositories/auth.repository';
import { AuthDataSource } from '../datasources/auth.datasource';
import { Credentials, ResetPasswordForm, RecoverPasswordForm } from '../../domain/entities';
import { AppResponse } from '@/core/domain/entities/response/app.response';
import TYPES from '@/core/hooks/di/di.types';

@injectable()
export class AuthRepositoryImpl implements AuthRepository {
	private authDataSource: AuthDataSource;

	constructor(@inject(TYPES.AuthDataSource) _authDataSource: AuthDataSource) {
		this.authDataSource = _authDataSource;
	}

	async login(_params: Credentials): Promise<AppResponse> {
		return await this.authDataSource.login(_params);
	}

	async recoverPassword(_params: RecoverPasswordForm): Promise<AppResponse> {
		return await this.authDataSource.recoverPassword(_params);
	}

	async resetPassword(_params: ResetPasswordForm): Promise<AppResponse> {
		return await this.authDataSource.resetPassword(_params);
	}

}
