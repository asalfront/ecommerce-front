import { injectable, inject } from 'inversify';

import { AppResponse } from '@/core/domain/entities/response/app.response';
import { ResetPasswordForm } from '../entities';
import type { AuthRepository } from '../repositories/auth.repository';
import TYPES from '@/core/hooks/di/di.types';

export interface ResetPassword {
	invoke(_params: ResetPasswordForm): Promise<AppResponse>;
}

@injectable()
export class ResetPasswordUseCase implements ResetPassword {
	private authrepository: AuthRepository;

	constructor(@inject(TYPES.AuthRepository) _authrepository: AuthRepository) {
		this.authrepository = _authrepository;
	}

	async invoke(params: ResetPasswordForm): Promise<AppResponse> {
		return await this.authrepository.resetPassword(params);
	}

}
