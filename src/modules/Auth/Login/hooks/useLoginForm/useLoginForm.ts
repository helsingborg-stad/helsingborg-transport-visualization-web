import { useState } from 'react';
import { ZodError } from 'zod';
import { useAuthApi } from 'hooks/useAuthApi';
import { LoginFormType, LoginValidation } from './login.validation';

type ErrorMessage = {
  email?: string;
  password?: string;
};

export const useLoginForm = () => {
  const { login } = useAuthApi();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<ErrorMessage>({});
  const [formFields, setFormFields] = useState<LoginFormType>({
    email: '',
    password: '',
  });

  const setFieldValue = (name: string) => ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const submitForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});
    try {
      LoginValidation.parse(formFields);
    } catch (err) {
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
        return;
      }
    }

    // TODO: update error message
    login(formFields)
      .then((data) => console.log(data))
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .catch((err) => setErrors({ email: 'fel uppgifter' }))
      .finally(() => setIsLoading(false));
  };

  return {
    submitForm,
    setFieldValue,
    formFields,
    errors,
    isLoading,
  };
};
