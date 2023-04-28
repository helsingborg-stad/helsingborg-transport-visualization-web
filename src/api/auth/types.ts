export type LoginRequest = {
  identifier: string;
  password: string;
};

export type LoginResponse = {
  id: number;
  token: string;
  organisationNumber: string;
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
