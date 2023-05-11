export type Organisation = {
  id: string;
  orgNumber: string;
  contactPerson: string;
  mobileNumber: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt?: string;
};

export type OrganisationDTO = {
  id: string;
  orgNumber: string;
  name: string;
  email: string;
  token?: string;
  createdAt: Date;
  updatedAt?: Date;
};
