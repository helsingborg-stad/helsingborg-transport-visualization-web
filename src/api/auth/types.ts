export type LoginRequest = {
  email: string;
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
