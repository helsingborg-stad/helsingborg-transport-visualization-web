import { z } from 'zod';

// REGEX to match: 6 siffror med minst 3 unika siffror och där högst 2 siffror i följd är lika.
const pinCodeRegex = /^(?!.*(\d)\D*\1\D*\1)(?!.*(\d)\D?\2\D?\2)(?!.*(\d)\d?\D*(?:\d\D*){2}\3)\d{6}$/;

// REGEX to match 10 tecken långt och innehålla minst en versal, en siffra och ett specialtecken.
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{10,}$/;

// TODO: update all error messages
export const CreateAccountValidation = z.object({
  orgNumber: z
    .string()
    .regex(/\d{10}/, { message: 'Fel format på organisationsnummer - ett organisationsnummer består av 10 siffror.' }),
  name: z.string().min(1, { message: 'Ange företagsnamn som hör till organisationsnumret' }),
  email: z
    .string()
    .min(1, { message: 'Fel format för mejladress - dubbelkolla stavningen och försök igen.' })
    .email({ message: 'Fel format för mejladress - dubbelkolla stavningen och försök igen.' }),
  password: z.string().regex(passwordRegex, { message: 'Fel format för lösenord - välj ett lösenord som följer reglerna.' }),
  pinCode: z.string().regex(pinCodeRegex, { message: 'Fel format för pinkod - välj en pinkod som följer reglerna.' }),
  consent: z.boolean().optional().transform((value) => {
    if (value !== true) {
      throw new Error('Du måste godkänna villkoren för att skapa ett konto');
    }
    return true;
  }),
});

export type CreateAccountType = z.infer<typeof CreateAccountValidation>;
