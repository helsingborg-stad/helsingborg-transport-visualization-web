import { Input, Checkbox, Button } from 'components';
import * as Styled from './styled';
import { useCreateAccountForm } from '../../hooks';

export const CreateAccountForm = () => {
  const {
    setFieldValue, formFields, errors, setConsentValue, submitForm, isLoading,
  } = useCreateAccountForm();

  return (
    <Styled.Container>
      <Styled.Form onSubmit={submitForm}>
        <Input
          label="Organisationsnummer"
          type="text"
          placeholder="4494327523"
          name="orgNumber"
          id="orgNumber"
          value={formFields.orgNumber}
          onChange={setFieldValue('orgNumber')}
          error={errors.orgNumber}
        />
        <Input
          label="Mejladress"
          type="text"
          placeholder="exempel@helsingborg.se"
          name="email"
          id="email"
          value={formFields.email}
          onChange={setFieldValue('email')}
          error={errors.email}
        />
        <Input
          label="Företag"
          type="text"
          placeholder="Hbg Transport AB"
          name="name"
          id="name"
          value={formFields.name}
          onChange={setFieldValue('name')}
          error={errors.name}
        />
        <Input
          label="Lösenord"
          type="password"
          placeholder="********"
          name="password"
          id="password"
          value={formFields.password}
          onChange={setFieldValue('password')}
          error={errors.password}
          info="Lösenordet ska vara minst 10 tecken långt och innehålla minst en versal, en siffra och ett specialtecken."
        />
        <Input
          label="PIN kod 6 siffror"
          type="password"
          placeholder="******"
          name="pinCode"
          id="pinCode"
          value={formFields.pinCode}
          onChange={setFieldValue('pinCode')}
          error={errors.pinCode}
          info="För att logga in i appen används en pinkod. Bestäm vilken pinkod din verksamhet ska använda. Koden ska bestå av 6 siffror med minst 3 unika siffror och där högst 2 siffror i följd är lika."
        />
        <Styled.ChecboxContainer>

          <Checkbox
            id="Consent"
            checked={formFields.consent}
            onChange={setConsentValue}
            error={errors.consent}
          >
            <Styled.Label>
              Genom att skapa konto säger du ja till
              {' '}
              <Styled.Link target="_blank" href="https://helsingborg.se/">xxx</Styled.Link>
            </Styled.Label>
          </Checkbox>
        </Styled.ChecboxContainer>
        <Styled.ButtonContainer>
          <Button type="submit" disabled={isLoading} onClick={() => submitForm}>Skapa konto</Button>
        </Styled.ButtonContainer>
      </Styled.Form>
    </Styled.Container>
  );
};
