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
  contactPerson?: string;
  mobileNumber?: string;
  token?: string;
  createdAt: Date;
  updatedAt?: Date;
};

export enum OrganisationFields {
  id = 'id',
  orgNumber = 'orgNumber',
  name = 'name',
  email = 'email',
  contactPerson = 'contactPerson',
  mobileNumber = 'mobileNumber',
  createdAt = 'createdAt',
}
