import axios, { AxiosResponse } from 'axios';

import { Authenticated } from '@/features/auth/domain/entities/authenticated';
import { Failure } from '../errors/failure';
import { LaravelResponse, LaravelValidationError, LaravelValidationResponse } from '../errors/laravel.failure';

export class Apphelper {

	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	static isFailure(obj: any): obj is Failure {
		return 'isAxiosError' in obj;
	}

	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	static isAuthenticatedEntity(obj: any): obj is Authenticated {
		return 'id' in obj && 'email' in obj;
	}

	static isLaravelValidationResponse(response: AxiosResponse): response is LaravelValidationResponse {
		return response.status === 422
			&& typeof response.data?.message === 'string'
			&& typeof response.data?.errors === 'object';
	}

	static isLaravelValidationError(error: unknown): error is LaravelValidationError {
		return Boolean(
			axios.isAxiosError(error)
			&& error.response
			&& this.isLaravelValidationResponse(error.response)
		);
	}

	static getLaravelErrors(response: AxiosResponse | unknown): LaravelResponse | LaravelValidationResponse {
		const r = response as LaravelResponse;
		return r;
	}

	static getFileName(name: string|undefined|null, extension: string): string {
		const now = Date.now();
		const temp = name ? name.replaceAll('-', ' ').replace(/\s\s+/g, ' ').trim().replaceAll(' ', '_').toUpperCase() + '_' : '';
		return temp + now + '.' + extension;
	}
}
