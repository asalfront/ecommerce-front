import { inject, injectable } from 'inversify';

import TYPES from '@/core/hooks/di/di.types';
import { ChangePassword, CommetsListResponse, Profile, ProfileForm } from '../entities';
import type { ProfileRepository } from '@/features/profile/domain/repositories';
import { AppResponse } from '@/core/domain/entities/response/app.response';

export interface IProfile {
	getProfile(): Promise<AppResponse<Profile>>;
	updateProfile(_id: number, _profile: ProfileForm): Promise<AppResponse>;
	updatePassword(_changePassword: ChangePassword): Promise<AppResponse>;
}

@injectable()
export class ProfileUseCase implements IProfile {
	private profileRepository: ProfileRepository;

	constructor(@inject(TYPES.ProfileRepository) profileRepository: ProfileRepository) {
		this.profileRepository = profileRepository;
	}

	async getProfile(): Promise<AppResponse<Profile>> {
		return await this.profileRepository.getProfile();
	}

	async updateProfile(id: number, profile: ProfileForm): Promise<AppResponse> {
		return await this.profileRepository.updateProfile(id, profile);
	}

	async updatePassword(changePassword: ChangePassword): Promise<AppResponse> {
		return await this.profileRepository.updatePassword(changePassword);
	}

	async getCommets(id: number): Promise<CommetsListResponse> {
		return await this.profileRepository.getCommets(id);
	}
}

