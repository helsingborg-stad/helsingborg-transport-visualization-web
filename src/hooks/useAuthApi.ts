import {
  postLogin, postSignUp,
} from 'api/auth';
import { LoginRequest, SignUpRequest } from 'api/auth/types';

export const useAuthApi = () => {
  const login = (body: LoginRequest) => postLogin(body);
  const createAccount = (body: SignUpRequest) => postSignUp(body);

  return {
    login,
    createAccount,
  };
};
