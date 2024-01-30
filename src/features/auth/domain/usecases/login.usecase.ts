import { injectable, inject } from 'inversify';

import { AppResponse } from '@/core/domain/entities/response/app.response';
import { LoginForm } from '../entities';
import type { AuthRepository } from '../repositories/auth.repository';
import TYPES from '@/core/hooks/di/di.types';

export interface Login {
	invoke(_params: LoginForm): Promise<AppResponse>;
}

@injectable()
export class LoginUseCase implements Login {
	private authrepository: AuthRepository;

	constructor(@inject(TYPES.AuthRepository) _authrepository: AuthRepository) {
		this.authrepository = _authrepository;
	}

	async invoke(params: LoginForm): Promise<AppResponse> {
		return await this.authrepository.login(params);
	}
}
