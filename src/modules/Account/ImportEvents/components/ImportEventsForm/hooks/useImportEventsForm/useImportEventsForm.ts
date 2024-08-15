// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AxiosError } from 'axios';
import { useState, useCallback } from 'react';
import { useEventApi } from 'hooks/useEventApi';
import { useNavigate } from 'react-router-dom';

export const useImportEventsForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [importFile, setImportFile] = useState<File | null>(null);
  const [password, setPassword] = useState<string>('');
  const [apiErrorText, setApiErrorText] = useState<string>('');
  const [passwordIsCorrect, setPasswordIsCorrect] = useState<boolean>(false);
  const navigate = useNavigate();

  const { importEventsPassword, importEventsByExcel } = useEventApi();

  const onDrop = useCallback((acceptedFiles: any) => {
    const file = acceptedFiles[0];
    setImportFile(file);
  }, []);

  const submitFileForm = async () => {
    setIsLoading(true);
    try {
      await importEventsByExcel(importFile as File, password);
      setApiErrorText('');
      navigate('/events/grouped');
    } catch (error: AxiosError | any) {
      if (error) {
        setApiErrorText(error.response.data.message);
      }
    }
    setIsLoading(false);
  };

  const submitPasswordForm = async () => {
    setIsLoading(true);
    try {
      await importEventsPassword(password);
      setPasswordIsCorrect(true);
      setApiErrorText('');
    } catch (error: AxiosError | any) {
      if (error) {
        if (error.response.status === 401) {
          setApiErrorText(
            'Felaktigt lösenord',
          );
        } else {
          setApiErrorText(error.response.data.message);
        }
      }
    }
    setIsLoading(false);
  };

  return {
    isLoading,
    onDrop,
    submitFileForm,
    submitPasswordForm,
    apiErrorText,
    setPassword,
    passwordIsCorrect,
    password,
    importFile,
  };
};
