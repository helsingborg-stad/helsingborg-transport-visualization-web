import { Button, Input } from 'components';
import { useAuth } from 'hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import * as Styled from './styled';
import { useForgotPasswordForm } from './hooks';

export const ForgotPassword = () => {
  const navigate = useNavigate();
  const { getForgotPasswordIdentifier } = useAuth();
  const {
    identifier, setIdentifier, submit, sendAgain, error, isLoading,
  } = useForgotPasswordForm();
  const returnToLogin = () => {
    navigate('/auth');
  };

  const hasPasswordIdentifier = () => !!getForgotPasswordIdentifier();

  if (hasPasswordIdentifier()) {
    return (
      <>
        <Styled.Title>Kolla din mail</Styled.Title>
        <Styled.Text>
          Återställning av lösenord är skickat till din mejl.
        </Styled.Text>
        <Styled.ButtonContainer>
          <Button type="button" onClick={returnToLogin} secondary disabled={isLoading}>Avbryt</Button>
          <Button type="submit" onClick={sendAgain} disabled={isLoading}>Skicka igen</Button>
        </Styled.ButtonContainer>
      </>
    );
  }

  return (
    <>
      <Styled.Title>Glömt lösenord</Styled.Title>
      <Styled.Text>
        Skriv ditt organisationsnummer eller mejladress för att  återställa lösenord
      </Styled.Text>
      <form onSubmit={submit}>
        <Input
          type="text"
          id="identifier"
          name="identifier"
          placeholder="Organisationsnummer / mejladress"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          error={error}
        />
        <Styled.ButtonContainer>
          <Button type="button" onClick={returnToLogin} secondary disabled={isLoading}>Avbryt</Button>
          <Button type="submit" onClick={() => submit} disabled={isLoading}>Skicka</Button>
        </Styled.ButtonContainer>
      </form>
    </>
  );
};
