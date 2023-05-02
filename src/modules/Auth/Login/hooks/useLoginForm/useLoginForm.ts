import { useState } from 'react';
import { ZodError } from 'zod';
import { useAuthApi } from 'hooks/useAuthApi';
import { useAuth } from 'hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { LoginFormType, LoginValidation } from './login.validation';

type ErrorMessage = {
  identifier?: string;
  password?: string;
};

export const useLoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuthApi();
  const { setOrganisation, setToken } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<ErrorMessage>({});
  const [formFields, setFormFields] = useState<LoginFormType>({
    identifier: '',
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
      .then(({ data }) => {
        const { token } = data;
        setToken(token);
        setOrganisation(data);
      })
      .then(() => navigate('/'))
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .catch((_err) => setErrors({ identifier: 'Organisationsnummer eller lösenord stämmer inte - försök igen. Om du behöver ett nytt lösenord klicka på länken.' }))
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
