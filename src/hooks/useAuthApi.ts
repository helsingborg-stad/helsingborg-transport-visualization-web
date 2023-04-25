import {
  postLogin,
} from 'api/auth';
import { LoginRequest } from 'api/auth/types';

export const useAuthApi = () => {
  const login = (body: LoginRequest) => postLogin(body);

  return {
    login,
  };
};
