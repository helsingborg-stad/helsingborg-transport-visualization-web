import { useState } from 'react';
import { useAuthApi } from 'hooks/useAuthApi';
import { useAuth } from 'hooks/useAuth';
import { ForgotPasswordValidation } from './forgotPassword.validation';

export const useForgotPasswordForm = () => {
  const { forgotPassword } = useAuthApi();
  const { setForgotPasswordIdentifier, getForgotPasswordIdentifier } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const [identifier, setIdentifier] = useState<string>('');

  const submit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      ForgotPasswordValidation.parse({ identifier });
      forgotPassword({ identifier })
        .then(() => setForgotPasswordIdentifier(identifier))
        .then(() => window.location.reload());
    } catch (err: any) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const sendAgain = () => {
    setIsLoading(true);
    const currentIdentifier = getForgotPasswordIdentifier();
    if (!currentIdentifier) {
      return;
    }
    forgotPassword({ identifier: currentIdentifier })
      .then(() => setIsLoading(false));
  };

  return {
    identifier,
    setIdentifier,
    submit,
    sendAgain,
    isLoading,
    error,
  };
};
