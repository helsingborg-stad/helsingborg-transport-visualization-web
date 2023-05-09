export type LoginRequest = {
  identifier: string;
  password: string;
};

export type LoginResponse = {
  id: string;
  token: string;
  orgNumber: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export type SignUpRequest = {
  orgNumber: string;
  name: string;
  email: string;
  password: string;
  pinCode: string;
};

export type SignUpResponse = {
  createdAt: string;
  email: string;
  id: string;
  name: string;
  orgNumber: string;
  token: string;
  updatedAt?: string;
};

export type ForgotPasswordRequest = {
  identifier: string;
};

export type ResetPasswordRequest = {
  token: string;
  password: string;
};
