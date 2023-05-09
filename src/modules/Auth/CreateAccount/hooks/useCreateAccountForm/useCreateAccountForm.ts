import { useState } from 'react';
import { ZodError } from 'zod';
import { useAuthApi } from 'hooks/useAuthApi';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { CreateAccountType, CreateAccountValidation } from './createAccount.validation';

type ErrorMessage = {
  email?: string;
  password?: string;
  orgNumber?: string;
  name?: string;
  pinCode?: string;
  consent?: string;
  contactPerson?: string;
  mobileNumber?: string;
};

export const useCreateAccountForm = () => {
  const navigate = useNavigate();
  const { createAccount } = useAuthApi();

  const { setOrganisation, setToken } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<ErrorMessage>({});
  const [formFields, setFormFields] = useState<CreateAccountType>({
    orgNumber: '',
    name: '',
    email: '',
    password: '',
    pinCode: '',
    contactPerson: '',
    mobileNumber: '',
    consent: false,
  });

  const setFieldValue = (name: string) => ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const setConsentValue = (checked: boolean) => {
    setFormFields({
      ...formFields,
      consent: checked,
    });
  };

  const submitForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    try {
      CreateAccountValidation.parse(formFields);
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
      if (err.message === 'Du måste godkänna villkoren för att skapa ett konto') {
        setErrors({
          ...errors,
          consent: err.message,
        });
        setIsLoading(false);
      }
      return;
    }

    createAccount(formFields)
      .then(({ data }) => {
        const { token } = data;
        setToken(token);
        setOrganisation(data);
      })
      .then(() => navigate('/'))
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .catch((_err) => setErrors({ orgNumber: 'Bolag finns redan registrerat' }))
      .finally(() => setIsLoading(false));
  };

  return {
    submitForm,
    setFieldValue,
    formFields,
    errors,
    isLoading,
    setConsentValue,
  };
};
