import { z } from 'zod';

// REGEX to match: 6 siffror med minst 3 unika siffror och där högst 2 siffror i följd är lika.
const pinCodeRegex = /^(?!.*(\d)\D*\1\D*\1)(?!.*(\d)\D?\2\D?\2)(?!.*(\d)\d?\D*(?:\d\D*){2}\3)\d{6}$/;

// REGEX to match 10 tecken långt och innehålla minst en versal, en siffra och ett specialtecken.
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{10,}$/;

// TODO: update all error messages
export const CreateAccountValidation = z.object({
  orgNumber: z
    .string()
    .regex(/\d{10}/, { message: 'Organisation number is required' }),
  name: z.string().min(1, { message: 'Company name is required' }),
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Needs to be an email' }),
  password: z.string().regex(passwordRegex, { message: 'Must match password requirements' }),
  pinCode: z.string().regex(pinCodeRegex, { message: 'Pincode must match requirements' }),
  consent: z.boolean().optional().transform((value) => {
    if (value !== true) {
      throw new Error('Consent must be given');
    }
    return true;
  }),
});

export type CreateAccountType = z.infer<typeof CreateAccountValidation>;
