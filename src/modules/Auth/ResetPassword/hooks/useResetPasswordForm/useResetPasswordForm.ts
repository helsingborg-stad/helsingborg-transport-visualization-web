import { useState } from 'react';
import { useAuthApi } from 'hooks/useAuthApi';
import { ZodError } from 'zod';
import { ResetPasswordType, ResetPasswordValidation } from './resetPassword.validation';

type ErrorMessage = {
  password?: string;
  confirm?: string;
};

export const useResetPasswordForm = () => {
  const { resetPassword } = useAuthApi();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<ErrorMessage>({});
  const [passwords, setPasswords] = useState<ResetPasswordType>({
    password: '',
    confirm: '',
  });

  const setFieldValue = (name: string) => ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPasswords({
      ...passwords,
      [name]: value,
    });
  };

  const submit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setErrors({});
    setIsLoading(true);

    try {
      ResetPasswordValidation.parse(passwords);
      resetPassword({
        token: '',
        password: passwords.password,
      });
    } catch (err: any) {
      if (err instanceof ZodError) {
        const zodErrors: Partial<Record<string, string>> = {};
        err.issues.forEach((issue) => {
          const fieldName = issue.path[0];
          const errorMessage = issue.message;
          if (!zodErrors[fieldName]) {
            zodErrors[fieldName] = errorMessage;
          }
        });
        setErrors(zodErrors);
        setIsLoading(false);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    passwords,
    setFieldValue,
    submit,
    isLoading,
    errors,
  };
};
