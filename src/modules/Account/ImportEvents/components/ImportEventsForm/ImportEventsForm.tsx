/* eslint-disable react/jsx-props-no-spreading */
import { useDropzone } from 'react-dropzone';
import {
  Input, Button,
  Link,
} from 'components';
import * as Styled from './styled';
import { useImportEventsForm } from './hooks';

export const ImportEventsForm = () => {
  const {
    onDrop,
    passwordIsCorrect,
    setPassword,
    password,
    submitFileForm,
    submitPasswordForm,
    apiErrorText,
    isLoading,
    importFile,
  } = useImportEventsForm();

  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
    isDragActive,
  } = useDropzone({
    onDrop,
    accept: {
      'application/json': ['.xlsx'],
    },
    maxFiles: 1,
  });

  return (
    <Styled.ContentContainer>
      {passwordIsCorrect ? (
        <form onSubmit={submitFileForm}>
          <Styled.DropArea {...getRootProps({ isFocused, isDragAccept, isDragReject })}>
            <input {...getInputProps()} />
            {
        isDragActive
          ? <p>Ladda upp zoner...</p>
          : <p>Dra zoner eller klicka för att ladda upp</p>
      }
          </Styled.DropArea>
          <Link href="/Template.xlsx" download="mall.xlsx" label="Ladda ner mall" />
          <Styled.ButtonContainer>
            <Button onClick={submitFileForm} type="button" disabled={isLoading || !importFile}>Importera</Button>
          </Styled.ButtonContainer>
        </form>
      ) : (
        <form>
          <Input
            label="Lösenord"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Lösenord"
          />
          <Styled.ButtonContainer>
            <Button onClick={submitPasswordForm} type="button" disabled={isLoading}>Verifiera</Button>
          </Styled.ButtonContainer>
        </form>
      )}
      {apiErrorText && <Styled.ErrorText>{apiErrorText}</Styled.ErrorText>}
    </Styled.ContentContainer>
  );
};
