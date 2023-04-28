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
        type="text"
        placeholder="Organisationsnummer / mejladress"
        name="identifier"
        id="identifier"
        value={formFields.identifier}
        onChange={setFieldValue('identifier')}
        error={errors.identifier}
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
