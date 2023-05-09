import { Button, Input } from 'components';
import { useNavigate } from 'react-router-dom';
import * as Styled from './styled';
import { useResetPasswordForm } from './hooks';

export const ResetPassword = () => {
  const navigate = useNavigate();
  const {
    passwords, setFieldValue, submit, errors, isLoading,
  } = useResetPasswordForm();
  const returnToLogin = () => {
    navigate('/auth');
  };

  return (
    <>
      <Styled.Title>Nytt lösenord</Styled.Title>
      <form onSubmit={submit}>
        <Input
          type="password"
          id="password"
          name="password"
          label="Nytt lösenord"
          placeholder="****"
          value={passwords.password}
          onChange={setFieldValue('password')}
          error={errors.password}
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
          <Button onClick={returnToLogin} secondary disabled={isLoading}>Avbryt</Button>
          <Button onClick={() => submit} disabled={isLoading}>Ändra lösenord</Button>
        </Styled.ButtonContainer>
      </form>
    </>
  );
};
