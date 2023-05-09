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
  createdAt: Date;
  updatedAt?: Date;
};

export type SignUpRequest = {
  orgNumber: string;
  name: string;
  email: string;
  password: string;
  pinCode: string;
};

export type SignUpResponse = {
  id: string;
  orgNumber: string;
  name: string;
  email: string;
  token: string;
  createdAt: Date;
  updatedAt?: Date;
};

export type ForgotPasswordRequest = {
  identifier: string;
};

export type ResetPasswordRequest = {
  token: string;
  password: string;
};
