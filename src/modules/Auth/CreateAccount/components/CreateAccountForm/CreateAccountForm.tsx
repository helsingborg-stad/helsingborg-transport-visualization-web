import { Input, Button, RadioButton } from 'components';
import * as Styled from './styled';
import { useCreateAccountForm } from '../../hooks';

export const CreateAccountForm = () => {
  const {
    setFieldValue, formFields, errors, submitForm, isLoading, setRadioButtonValue,
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
          label="Kontaktperson"
          type="text"
          placeholder="Förnamn Efternamn"
          name="contactPerson"
          id="contactPerson"
          value={formFields.contactPerson}
          onChange={setFieldValue('contactPerson')}
          error={errors.contactPerson}
        />
        <Input
          label="Mobilnummer för kontaktperson"
          type="text"
          placeholder="xxx xxx xx xx"
          name="mobileNumber"
          id="mobileNumber"
          value={formFields.mobileNumber}
          onChange={setFieldValue('mobileNumber')}
          error={errors.mobileNumber}
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
        <RadioButton label="Publikt konto - data delas med andra" onClick={() => setRadioButtonValue('isPublic', true)} checked={formFields.isPublic} />
        <RadioButton label="Privat konto - datan delas inte med andra" onClick={() => setRadioButtonValue('isPublic', false)} checked={!formFields.isPublic} />
        <Styled.Info>
          Med publikt konto delar ni er data med andra som har skapat publikt konto i Sam och skapar
          därmed förutsättningar
          för att hitta samlastningoch bidrar till smartare beställningsbeteende.
          Med privata konto kan ni bara se er egen insamlade data och ni delar inte den med andra.
          Ni ser heller inte datan från publika konton.
        </Styled.Info>
        <Styled.ButtonContainer>
          <Button type="submit" disabled={isLoading} onClick={() => submitForm}>Skapa konto</Button>
        </Styled.ButtonContainer>
      </Styled.Form>
    </Styled.Container>
  );
};
