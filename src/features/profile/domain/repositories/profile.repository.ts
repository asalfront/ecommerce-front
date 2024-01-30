import { AppResponse } from '@/core/domain/entities/response/app.response';
import { ChangePassword, CommetsListResponse, Profile, ProfileForm } from '../entities';

export interface ProfileRepository {
  getProfile(): Promise<AppResponse<Profile>>;
  updateProfile(_id: number, _profile: ProfileForm): Promise<AppResponse>;
  updatePassword(_changePassword: ChangePassword): Promise<AppResponse>;
  getCommets(_id: number): Promise<CommetsListResponse>;
}
