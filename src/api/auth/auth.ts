import { client } from '../baseAxios';
import { LoginRequest, LoginResponse } from './types';

export const postLogin = (body: LoginRequest) => client.post<LoginResponse>('/auth/login', body);
