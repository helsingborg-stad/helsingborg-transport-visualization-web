import { Link } from 'components/Link';
import { LoginForm } from './components';
import * as Styled from './styled';

// TODO: add correct href to link
export const Login = () => (
  <Styled.Container>
    <Styled.Heading>Välkommen till Samlastningschansen</Styled.Heading>
    <Styled.InfoText>
      Samlar färddata vid leveranser och ger överblick på vilka samlastningsmöjligheter som finns.
      {' '}
      <Styled.Link href="/">Läs mer om hur det funkar</Styled.Link>
    </Styled.InfoText>
    <LoginForm />
    <Styled.CreateAccountText>
      Har du inget konto än?
      {' '}
      <Link label="Skapa nytt konto" href="/" />
    </Styled.CreateAccountText>
  </Styled.Container>
);
