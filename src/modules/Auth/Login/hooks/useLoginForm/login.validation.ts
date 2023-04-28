import { z } from 'zod';

const identifierRegex = /^(?:(?=[^@]+@[^@]+\.[^@]+)\S+@\S+|(?:\d\D*){10})$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{10,}$/;

export const LoginValidation = z.object({
  identifier: z
    .string()
    .regex(identifierRegex, { message: 'must be orgnr or email' }),
  password: z.string().regex(passwordRegex, { message: 'must match password requiremtns' }),
});

export type LoginFormType = z.infer<typeof LoginValidation>;
