import { useState } from 'react';
import { ZodError } from 'zod';
import { LoginFormType, LoginValidation } from './login.validation';

type ErrorMessage = {
  email?: string;
  password?: string;
};

export const useLoginForm = () => {
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
      }
    }

    // TODO: connect to api for login
  };

  return {
    submitForm,
    setFieldValue,
    formFields,
    errors,
  };
};
