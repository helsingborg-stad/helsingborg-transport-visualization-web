import { Link } from 'components';
import * as Styled from './styled';
import { CreateAccountForm } from './components';

export const CreateAccount = () => (
  <Styled.Container>
    <Styled.Title>Skapa konto</Styled.Title>
    <CreateAccountForm />
    <Styled.LoginTextContainer>
      <Styled.LoginText>
        Har du redan ett konto?
        {' '}
        <Link label="Logga in" href="/auth/login" />
      </Styled.LoginText>
    </Styled.LoginTextContainer>
  </Styled.Container>
);
