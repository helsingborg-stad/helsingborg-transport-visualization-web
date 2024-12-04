export type LoginRequest = {
  identifier: string;
  password: string;
};

export type LoginResponse = {
  id: string;
  orgNumber: string;
  name: string;
  email: string;
  token: string;
  contactPerson: string;
  mobileNumber: string;
  createdAt: Date;
  updatedAt?: Date;
};

export type SignUpRequest = {
  orgNumber: string;
  name: string;
  email: string;
  password: string;
  pinCode: string;
  isPublic: boolean;
};

export type SignUpResponse = {
  id: string;
  orgNumber: string;
  name: string;
  email: string;
  token: string;
  contactPerson: string;
  mobileNumber: string;
  createdAt: Date;
  updatedAt?: Date;
  isPublic: boolean;
};

export type ForgotPasswordRequest = {
  identifier: string;
};

export type ResetPasswordRequest = {
  token: string;
  password: string;
};

export type PatchRequest = {
  password?: string;
  pinCode?: string;
  contactPerson?: string;
  mobileNumber?: string;
  email?: string;
};
