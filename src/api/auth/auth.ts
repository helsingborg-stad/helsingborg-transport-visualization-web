import { client } from '../baseAxios';
import {
  LoginRequest, LoginResponse, SignUpRequest, SignUpResponse,
} from './types';

export const postLogin = (body: LoginRequest) => client.post<LoginResponse>('/auth/login', body);
export const postSignUp = (body: SignUpRequest) => client.post<SignUpResponse>('auth/signup', body);
