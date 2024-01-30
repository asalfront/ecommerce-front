import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { isNull as _isNull } from 'lodash';

import { store } from '../redux/store';
import { Failure } from '../errors/failure';
import { AppResponse } from '../domain/entities/response/app.response';
import { Data } from '../domain/entities/response/data';

class AppDataSource {

	httpCLient: AxiosInstance;

	constructor() {
		const baseURL = import.meta.env.VITE_API_URL;
		this.httpCLient = axios.create({
			baseURL: baseURL
		});
		this.httpCLient.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
		this.initInterceptors();
	}

	initInterceptors() {
		this.httpCLient.interceptors.request.use(
			(config) => {
				const accessToken = this.getAccessToken();
				if (accessToken && !_isNull(accessToken)) {
					config.headers && (config.headers
						.Authorization = `Token ${accessToken}`);
				}
				
				return config;
			},
			// eslint-disable-next-line promise/no-promise-in-callback
			(error) => Promise.reject(error)
		);

		this.httpCLient.interceptors.response.use(
			(response) => response,
			(error) => {
				return Promise.reject(error);
			}
		);
	}

	getAccessToken() {
		const state = store.getState();
		return state?.auth?.token ?? null;
	}

	getError(e: unknown): Failure {
		return axios.isAxiosError(e) ? e as Failure : new Failure('Internal Server Error');
	}

	getResponse<T>(axiosResponse: AxiosResponse<T>): AppResponse<T> {
		const response: AppResponse<T> = {
			status: axiosResponse.status,
			data: axiosResponse.data,
			type: 'success'
		};

		return response;
	}

	getFailure<T>(e: unknown): AppResponse<T>{
		const failure = axios.isAxiosError(e) ? e as AxiosError : new AxiosError('Internal Server Error');
		const status = 500;
		const data: Data = {
			message: 'Internal Server Error'
		};

		const response: AppResponse<T> = {
			status: failure.response ? failure.response.status : status,
			data: failure.response ? failure.response.data as T : data as T,
			type: 'error'
		};

		return response;
	}
}

export default AppDataSource;
