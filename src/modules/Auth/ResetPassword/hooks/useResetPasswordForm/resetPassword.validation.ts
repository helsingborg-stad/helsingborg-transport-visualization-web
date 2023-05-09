import { z } from 'zod';

// REGEX to match 10 tecken långt och innehålla minst en versal, en siffra och ett specialtecken.
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{10,}$/;

export const ResetPasswordValidation = z.object({
  password: z.string().regex(passwordRegex, { message: 'Fel format för lösenord - välj ett lösenord som följer reglerna.' }),
  confirm: z.string(),
})
  .refine((data) => data.password === data.confirm, {
    message: 'Lösenorden stämmer inte överrens',
    path: ['confirm'],
  });

export type ResetPasswordType = z.infer<typeof ResetPasswordValidation>;
