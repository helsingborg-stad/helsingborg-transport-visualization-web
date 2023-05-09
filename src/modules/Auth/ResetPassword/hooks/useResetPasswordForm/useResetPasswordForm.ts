import { useState } from 'react';
import { useAuthApi } from 'hooks/useAuthApi';
import { ZodError } from 'zod';
import { useAuth } from 'hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { ResetPasswordType, ResetPasswordValidation } from './resetPassword.validation';

type ErrorMessage = {
  password?: string;
  confirm?: string;
};

type HookParams = {
  resetToken?: string;
};

export const useResetPasswordForm = ({ resetToken }: HookParams) => {
  const navigate = useNavigate();
  const { clearForgotPasswordIdentifier, setToken, setOrganisation } = useAuth();
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

    if (!resetToken) {
      return;
    }

    try {
      ResetPasswordValidation.parse(passwords);
      resetPassword({
        token: resetToken,
        password: passwords.password,
      })
        .then(({ data }) => {
          clearForgotPasswordIdentifier();
          const { token } = data;
          setToken(token);
          setOrganisation(data);
        })
        .then(() => navigate('/'))
        .catch(() => setErrors({ confirm: 'Ogiltig token, försök igen genom att starta om återställningen' }));
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
