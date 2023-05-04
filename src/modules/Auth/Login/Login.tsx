import { Link } from 'components/Link';
import { LoginForm } from './components';
import * as Styled from './styled';

export const Login = () => (
  <Styled.Container>
    <Styled.Heading>Välkommen till Samlastningschansen</Styled.Heading>
    <Styled.InfoText>
      Samlar färddata vid leveranser och ger överblick på vilka samlastningsmöjligheter som finns.
      {' '}
      <Styled.Link target="_blank" href="https://helsingborg.se/">Läs mer om hur det funkar</Styled.Link>
    </Styled.InfoText>
    <LoginForm />
    <Styled.CreateAccountText>
      Har du inget konto än?
      {' '}
      <Link label="Skapa nytt konto" href="signup" />
    </Styled.CreateAccountText>
  </Styled.Container>
);
