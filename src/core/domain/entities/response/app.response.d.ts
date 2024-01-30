import { Status } from './types';

export interface AppResponse<T = Data> {
	status: number;
  type: Status;
	data: T;
}
