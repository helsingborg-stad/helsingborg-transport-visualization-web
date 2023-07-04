import { z } from 'zod';

// REGEX to match: 6 siffror med minst 3 unika siffror och där högst 2 siffror i följd är lika.
const pinCodeRegex = /^(?!.*(\d)\D*\1\D*\1)(?!.*(\d)\D?\2\D?\2)(?!.*(\d)\d?\D*(?:\d\D*){2}\3)\d{6}$/;

// REGEX to match 10 tecken långt och innehålla minst en versal, en siffra och ett specialtecken.
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{10,}$/;

export const UpdateAccountValidation = z.object({
  email: z
    .string()
    .min(1, { message: 'Fel format för mejladress - dubbelkolla stavningen och försök igen.' })
    .email({ message: 'Fel format för mejladress - dubbelkolla stavningen och försök igen.' }),
  password: z
    .string()
    .regex(passwordRegex, { message: 'Fel format för lösenord - välj ett lösenord som följer reglerna.' }),
  pinCode: z.string().regex(pinCodeRegex, { message: 'Fel format för pinkod - välj en pinkod som följer reglerna.' }),
  contactPerson: z.string().min(1, { message: 'Ange ett kontakt-namn' }),
  mobileNumber: z.string().min(1, { message: 'Ange ett mobilnummer för kontakt' }),
  deleteAccountConfirmation: z.boolean().refine((val) => val === true, {
    message: 'Du måste bekräfta att du vill radera ditt konto',
  }),
});

export type UpdateAccountType = z.infer<typeof UpdateAccountValidation>;
