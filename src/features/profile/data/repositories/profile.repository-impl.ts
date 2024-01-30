import { inject, injectable } from 'inversify';

import TYPES from '@/core/hooks/di/di.types';
import { ChangePassword, CommetsListResponse, Profile, ProfileForm } from '@/features/profile/domain/entities';
import { ProfileRepository } from '@/features/profile/domain/repositories';
import { ProfileDataSource } from '@/features/profile/data/datasources';
import { AppResponse } from '@/core/domain/entities/response/app.response';

@injectable()
export class ProfileRepositoryImpl implements ProfileRepository {
	private profileDataSource: ProfileDataSource;

	constructor(@inject(TYPES.ProfileDataSource) profileDataSource: ProfileDataSource) {
		this.profileDataSource = profileDataSource;
	}

	async getProfile(): Promise<AppResponse<Profile>> {
		return await this.profileDataSource.getProfile();
	}

	async updateProfile(id: number, profile: ProfileForm): Promise<AppResponse> {
		return await this.profileDataSource.updateProfile(id, profile);
	}

	async updatePassword(changePassword: ChangePassword): Promise<AppResponse> {
		return await this.profileDataSource.updatePassword(changePassword);
	}

	async getCommets(id: number): Promise<CommetsListResponse> {
		return await this.profileDataSource.getCommets(id);
	}
}
