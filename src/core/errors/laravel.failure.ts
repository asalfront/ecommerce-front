import { AxiosError, AxiosResponse } from 'axios';

export interface LaravelResponse extends AxiosResponse {
	status: number;
	data: {
		message: string;
	};
}

export interface LaravelValidationResponse extends AxiosResponse {
	status: 422;
	data: {
		message: string;
		errors: Record<string, Array<string>>;
	};
}

export interface LaravelValidationError extends AxiosError {
	response: LaravelValidationResponse;
}
