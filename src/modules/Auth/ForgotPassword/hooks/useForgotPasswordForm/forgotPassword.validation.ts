import { z } from 'zod';

const identifierRegex = /^(?:(?=[^@]+@[^@]+\.[^@]+)\S+@\S+|(?:\d\D*){10})$/;

export const ForgotPasswordValidation = z.object({
  identifier: z
    .string()
    .regex(identifierRegex, { message: 'Fel format på organisationsnummer eller mejladdress - ett organisationsnummer består av 10 siffror.' }),
});

export type ForgotPasswordType = z.infer<typeof ForgotPasswordValidation>;
