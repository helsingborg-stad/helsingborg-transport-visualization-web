/* eslint-disable react/jsx-props-no-spreading */
import { useDropzone } from 'react-dropzone';
import {
  Input, Button,
  Link,
} from 'components';
import {
  Check, Download, Error, InsertDriveFileOutlined,
} from '@mui/icons-material';
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
    importErrorText,
    setImportFile,
    uploadStatus,
  } = useImportEventsForm();

  const errors = importErrorText ? importErrorText.split('|') : [];

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
          {importFile && (
            <Styled.FileContainer>
              <Styled.File>
                <InsertDriveFileOutlined />
                <p><b>{importFile?.name}</b></p>
              </Styled.File>
              <Styled.FileActions>
                {uploadStatus === 'success' && <Check color="success" />}
                {uploadStatus === 'error' && <Error color="error" />}
                {uploadStatus === 'idle' && <Styled.TextButton onClick={() => setImportFile(null)}>Ta bort</Styled.TextButton>}
              </Styled.FileActions>
            </Styled.FileContainer>
          )}
          {errors && errors.length > 0 && (
          <>
            <Styled.ErrorText>
              <b>
                {errors.length}
                {' '}
                fel
              </b>
            </Styled.ErrorText>
            {errors.map((error) => (
              <Styled.ErrorText style={{ margin: 0 }}>{error}</Styled.ErrorText>
            ))}
          </>
          )}
          {importFile && (
            <Styled.ButtonContainer>
              <Button onClick={submitFileForm} type="button" disabled={!importFile}>Importera</Button>
            </Styled.ButtonContainer>
          )}
        </form>
      ) : (
        <form onSubmit={submitPasswordForm}>
          <Styled.Paragraph>
            Transportdata kan delas i Sam genom import av rapporter. Rapporten skickar du
            enligt överenskommet intervall till din kontaktperson.
            Kontaktpersonen importerar in rapporten och datan blir sen synlig i Sam.
          </Styled.Paragraph>
          <Styled.DownloadContainer>
            <Download />
            <Link href="/Template.xlsx" download="mall.xlsx" label="Ladda ner rapportmall" />
          </Styled.DownloadContainer>
          {' '}
          <h3 style={{ marginBottom: '8px' }}>För kontaktperson</h3>
          <Styled.InputContainer>
            <Input
              label="Ange lösenord för att ladda upp rapporter"
              type="password"
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Lösenord"
            />
          </Styled.InputContainer>
          {apiErrorText && <Styled.ErrorText>{apiErrorText}</Styled.ErrorText>}
          <Styled.ButtonContainer>
            <Button onClick={submitPasswordForm} type="button" disabled={isLoading}>Verifiera</Button>
          </Styled.ButtonContainer>
        </form>
      )}
    </Styled.ContentContainer>
  );
};
