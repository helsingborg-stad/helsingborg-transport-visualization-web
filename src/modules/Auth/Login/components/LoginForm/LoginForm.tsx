import { Button, Input, Link } from 'components';
import { useLoginForm } from '../../hooks';
import * as Styled from './styled';

export const LoginForm = () => {
  const {
    submitForm, formFields, setFieldValue, errors, isLoading,
  } = useLoginForm();

  // TODO: add correct href to link
  return (
    <Styled.FormContainer onSubmit={submitForm}>

      <Input
        type="email"
        placeholder="Organisationsnummer / mejladress"
        name="email"
        id="email"
        value={formFields.email}
        onChange={setFieldValue('email')}
        error={errors.email}
      />
      <Input
        type="password"
        placeholder="Lösenord"
        name="password"
        id="password"
        value={formFields.password}
        onChange={setFieldValue('password')}
        error={errors.password}
      />
      <Styled.LinkContainer>
        <Link label="Glömt lösenord?" href="/" />
      </Styled.LinkContainer>
      <Styled.ButtonContainer>
        <Button type="submit" disabled={isLoading}>Logga in</Button>
      </Styled.ButtonContainer>
    </Styled.FormContainer>
  );
};
