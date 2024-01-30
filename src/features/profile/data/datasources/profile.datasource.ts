import { serialize } from 'object-to-formdata';

import { ChangePassword, Commets, CommetsListResponse, Profile, ProfileForm } from '../../domain/entities';
import { AppResponse } from '@/core/domain/entities/response/app.response';
import AppDataSource from '@/core/network/app.datasource';


export class ProfileDataSource extends AppDataSource {
	constructor() {
		super();
	}

	async getProfile(): Promise<AppResponse<Profile>> {
		try {
			const r  = await this.httpCLient.get<Profile>('/auth/me/');
			return this.getResponse(r);
		} catch (e) {
			return this.getFailure(e);
		}
	}

	async updateProfile(id: number, profile: ProfileForm): Promise<AppResponse> {
		try {
			const formData = serialize({
				...profile,
			});
			const r = await this.httpCLient.patch(`/users/${id}/`, formData);
			return this.getResponse(r);
		} catch (e) {
			return this.getFailure(e);
		}
	}

	async updatePassword(resetPassword: ChangePassword): Promise<AppResponse> {
		try {
			const r = await this.httpCLient.post('auth/password_change/', resetPassword);
			return this.getResponse(r);
		} catch (e) {
			return this.getFailure(e);
		}
	}

	async getCommets(customerId: number): Promise<CommetsListResponse> {
		try {
			const r = await this.httpCLient.get<Commets>(`/comments/${customerId}/users/`);
			return this.getResponse(r);
		} catch (e) {
			return this.getFailure(e);
		}
	}
}
