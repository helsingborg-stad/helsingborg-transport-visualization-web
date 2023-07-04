import { client } from '../baseAxios';
import {
  ForgotPasswordRequest,
  LoginRequest, LoginResponse, ResetPasswordRequest, SignUpRequest, SignUpResponse, PatchRequest,
} from './types';

export const postLogin = (body: LoginRequest) => client.post<LoginResponse>('/auth/login', body);
export const postSignUp = (body: SignUpRequest) => client.post<SignUpResponse>('auth/signup', body);
export const postForgotPassword = (body: ForgotPasswordRequest) => client.post('auth/forgot-password', body);
export const postResetPassword = (body: ResetPasswordRequest) => client.post('auth/reset-password', body);
export const patchAccount = (id: string, body: PatchRequest) => client.patch(`/organisations/${id}`, body);
