import { Button, Input } from 'components';
import { useNavigate, useParams } from 'react-router-dom';
import * as Styled from './styled';
import { useResetPasswordForm } from './hooks';

export const ResetPassword = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  const {
    passwords, setFieldValue, submit, errors, isLoading,
  } = useResetPasswordForm({ resetToken: token });
  const returnToLogin = () => {
    navigate('/auth');
  };

  if (!token) {
    return <p>You need a token to continue</p>;
  }

  return (
    <>
      <Styled.Title>Nytt lösenord</Styled.Title>
      <Styled.Form onSubmit={submit} id="resetForm">
        <Input
          type="password"
          id="password"
          name="password"
          label="Nytt lösenord"
          placeholder="****"
          value={passwords.password}
          onChange={setFieldValue('password')}
          error={errors.password}
          info="Lösenordet ska vara minst 10 tecken långt och innehålla minst en versal, en siffra och ett specialtecken."
        />
        <Input
          type="password"
          id="confirm"
          name="confirm"
          label="Nytt lösenord igen"
          placeholder="****"
          value={passwords.confirm}
          onChange={setFieldValue('confirm')}
          error={errors.confirm}
        />
        <Styled.ButtonContainer>
          <Button type="button" onClick={returnToLogin} secondary disabled={isLoading}>Avbryt</Button>
          <Button type="submit" disabled={isLoading} onClick={() => submit}>Ändra lösenord</Button>
        </Styled.ButtonContainer>
      </Styled.Form>
    </>
  );
};
