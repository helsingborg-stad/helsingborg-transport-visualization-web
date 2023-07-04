import {
  postForgotPassword,
  postLogin, postResetPassword, postSignUp, patchAccount,
} from 'api/auth';
import {
  LoginRequest, SignUpRequest, ForgotPasswordRequest, ResetPasswordRequest, PatchRequest,
} from 'api/auth/types';

export const useAuthApi = () => {
  const login = (body: LoginRequest) => postLogin(body);
  const createAccount = (body: SignUpRequest) => postSignUp(body);
  const updateAccount = (id: string, body: PatchRequest) => patchAccount(id, body);
  const forgotPassword = (body: ForgotPasswordRequest) => postForgotPassword(body);
  const resetPassword = (body: ResetPasswordRequest) => postResetPassword(body);

  return {
    login,
    createAccount,
    updateAccount,
    forgotPassword,
    resetPassword,
  };
};
