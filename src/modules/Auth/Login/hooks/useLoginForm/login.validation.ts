import { z } from 'zod';

const identifierRegex = /^(?:(?=[^@]+@[^@]+\.[^@]+)\S+@\S+|(?:\d\D*){10})$/;

export const LoginValidation = z.object({
  identifier: z
    .string()
    .regex(identifierRegex, { message: 'Fel format på organisationsnummer eller mejladdress - ett organisationsnummer består av 10 siffror.' }),
  password: z.string().min(1, { message: 'Vänligen fyll i ett lösenord' }),
});

export type LoginFormType = z.infer<typeof LoginValidation>;
