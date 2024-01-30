import { Credentials, ResetPasswordForm, RecoverPasswordForm } from '../entities';
import { AppResponse } from '@/core/domain/entities/response/app.response';

export interface AuthRepository {
  login(_params: Credentials): Promise<AppResponse>;
  recoverPassword(_params: RecoverPasswordForm): Promise<AppResponse>;
  resetPassword(_params: ResetPasswordForm): Promise<AppResponse>;
}
