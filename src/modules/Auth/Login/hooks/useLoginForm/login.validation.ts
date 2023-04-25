import { z } from 'zod';

export const LoginValidation = z.object({
  email: z
    .string()
    .min(1, { message: 'email is required' })
    .email({ message: 'needs to be an email' }),
  password: z.string().min(6, { message: 'password must be at least 6 characters' }),
});

export type LoginFormType = z.infer<typeof LoginValidation>;
