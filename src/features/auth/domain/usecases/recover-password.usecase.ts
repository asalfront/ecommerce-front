import { injectable, inject } from 'inversify';

import type { AuthRepository } from '../repositories/auth.repository';
import { AppResponse } from '@/core/domain/entities/response/app.response';
import { RecoverPasswordForm } from '../entities';
import TYPES from '@/core/hooks/di/di.types';

export interface RecoverPassword {
	invoke(_params: RecoverPasswordForm): Promise<AppResponse>;
}

@injectable()
export class RecoverPasswordUseCase implements RecoverPassword {
	private authrepository: AuthRepository;

	constructor(@inject(TYPES.AuthRepository) _authrepository: AuthRepository) {
		this.authrepository = _authrepository;
	}

	async invoke(params: RecoverPasswordForm): Promise<AppResponse> {
		return await this.authrepository.recoverPassword(params);
	}
}
