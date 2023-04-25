import { UserType } from 'types';

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  id: number;
  token: string;
  userType: UserType;
  freightCompanyId?: number;
  email: string;
  createdAt: string;
  updatedAt: string;
};
