import {
  postForgotPassword,
  postLogin, postResetPassword, postSignUp,
} from 'api/auth';
import {
  LoginRequest, SignUpRequest, ForgotPasswordRequest, ResetPasswordRequest,
} from 'api/auth/types';

export const useAuthApi = () => {
  const login = (body: LoginRequest) => postLogin(body);
  const createAccount = (body: SignUpRequest) => postSignUp(body);
  const forgotPassword = (body: ForgotPasswordRequest) => postForgotPassword(body);
  const resetPassword = (body: ResetPasswordRequest) => postResetPassword(body);

  return {
    login,
    createAccount,
    forgotPassword,
    resetPassword,
  };
};
