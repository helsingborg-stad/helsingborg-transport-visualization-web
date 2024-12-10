import {
  Button, Input, Checkbox, RadioButton,
} from 'components';
import { useAuth } from 'hooks/useAuth';
import * as Styled from './styled';
import { TogglabelContent } from '../TogglableContent';
import { useEditAccountForm } from '../../hooks';

export const EditAccountForm = () => {
  const { organisation } = useAuth();
  const {
    setFieldValue,
    toggleEditFieldValue,
    formFields,
    inEdit,
    EditableFields,
    errors,
    isLoading,
    submitForm,
    setDeleteAccountValue,
    submitDeleteAccountForm,
    setRadioButtonValue,
  } = useEditAccountForm();

  return (
    <Styled.ContentContainer>
      <TogglabelContent
        label="Mejladress"
        value={organisation?.email}
        showComponent={inEdit.email}
        onClick={toggleEditFieldValue(EditableFields.email)}
        component={(
          <Styled.Form onSubmit={submitForm(EditableFields.email)}>
            <Input
              type="email"
              placeholder={organisation?.email || ''}
              label="Nuvrande mejladress"
              name="email"
              id="email"
              value={formFields.email}
              onChange={setFieldValue('email')}
              error={errors.email}
            />
            <Styled.ButtonContainer>
              <Button type="submit" disabled={isLoading} onClick={() => submitForm}>Ändra email</Button>
            </Styled.ButtonContainer>
          </Styled.Form>
          )}
      />
      <TogglabelContent
        label="Kontaktperson"
        value={organisation?.contactPerson}
        showComponent={inEdit.contactPerson}
        onClick={toggleEditFieldValue(EditableFields.contactPerson)}
        component={(
          <Styled.Form onSubmit={submitForm(EditableFields.contactPerson)}>
            <Input
              type="text"
              placeholder={organisation?.contactPerson || ''}
              label="Nuvarande kontaktperson"
              name="contactPerson"
              id="contactPerson"
              value={formFields.contactPerson}
              onChange={setFieldValue('contactPerson')}
              error={errors.contactPerson}
            />
            <Styled.ButtonContainer>
              <Button type="submit" disabled={isLoading} onClick={() => submitForm}>Ändra kontaktperson</Button>
            </Styled.ButtonContainer>
          </Styled.Form>
          )}
      />
      <TogglabelContent
        label="Mobilnummer för kontaktperson"
        value={organisation?.mobileNumber}
        showComponent={inEdit.mobileNumber}
        onClick={toggleEditFieldValue(EditableFields.mobileNumber)}
        component={(
          <Styled.Form onSubmit={submitForm(EditableFields.mobileNumber)}>
            <Input
              type="tel"
              placeholder={organisation?.mobileNumber || ''}
              label="Nuvarande mobilnummer"
              name="mobileNumber"
              id="mobileNumber"
              value={formFields.mobileNumber}
              onChange={setFieldValue('mobileNumber')}
              error={errors.mobileNumber}
            />
            <Styled.ButtonContainer>
              <Button type="submit" disabled={isLoading} onClick={() => submitForm}>Ändra mobilnummer</Button>
            </Styled.ButtonContainer>
          </Styled.Form>
          )}
      />
      <TogglabelContent
        label="Lösenord"
        value="********"
        showComponent={inEdit.password}
        onClick={toggleEditFieldValue(EditableFields.password)}
        component={(
          <Styled.Form onSubmit={submitForm(EditableFields.password)}>
            <Input
              type="password"
              placeholder="********"
              label="Nytt lösenord"
              name="password"
              id="password"
              value={formFields.password}
              onChange={setFieldValue('password')}
              error={errors.password}
            />
            <Styled.ButtonContainer>
              <Button type="submit" disabled={isLoading} onClick={() => submitForm}>Ändra lösenord</Button>
            </Styled.ButtonContainer>
          </Styled.Form>
          )}
      />
      <TogglabelContent
        label="Pin-kod"
        value="********"
        showComponent={inEdit.pinCode}
        onClick={toggleEditFieldValue(EditableFields.pinCode)}
        component={(
          <Styled.Form onSubmit={submitForm(EditableFields.pinCode)}>
            <Input
              type="password"
              placeholder="********"
              label="Ny pin-kod"
              name="pinCode"
              id="pinCode"
              value={formFields.pinCode}
              onChange={setFieldValue('pinCode')}
              error={errors.pinCode}
            />
            <Styled.ButtonContainer>
              <Button type="submit" disabled={isLoading} onClick={() => submitForm}>Ändra pinkod</Button>
            </Styled.ButtonContainer>
          </Styled.Form>
          )}
      />
      <TogglabelContent
        label="Synlighet"
        value={organisation?.isPublic ? 'Publik' : 'Privat'}
        showComponent={inEdit.isPublic}
        onClick={toggleEditFieldValue(EditableFields.isPublic)}
        component={(
          <Styled.Form onSubmit={submitForm(EditableFields.isPublic)}>
            <RadioButton label="Publikt konto - data delas med andra" onClick={() => setRadioButtonValue('isPublic', true)} checked={formFields.isPublic} />
            <RadioButton label="Privat konto - datan delas inte med andra" onClick={() => setRadioButtonValue('isPublic', false)} checked={!formFields.isPublic} />
            <Styled.Info>
              Med publikt konto delar ni er data med andra som har skapat
              publikt konto i Sam och skapar
              därmed förutsättningar
              för att hitta samlastningoch bidrar till smartare beställningsbeteende.
              Med privata konto kan ni bara se er egen
              insamlade data och ni delar inte den med andra.
              Ni ser heller inte datan från publika konton.
            </Styled.Info>
            <Styled.ButtonContainer>
              <Button type="submit" disabled={isLoading} onClick={() => submitForm}>Ändra synlighet</Button>
            </Styled.ButtonContainer>
          </Styled.Form>
        )}
      />
      <TogglabelContent
        label="Kontostatus"
        value="Aktiv"
        showComponent={inEdit.deleteAccountConfirmation}
        onClick={toggleEditFieldValue(EditableFields.deleteAccountConfirmation)}
        component={(
          <Styled.Form onSubmit={submitDeleteAccountForm}>
            <Styled.ChecboxContainer>
              <Checkbox
                id="Consent"
                checked={formFields.deleteAccountConfirmation}
                onChange={setDeleteAccountValue}
                error={errors.deleteAccountConfirmation}
              >
                <Styled.Label>
                  Genom att kryssa i rutan bekräftar du att du vill radera ditt konto.
                </Styled.Label>
              </Checkbox>
            </Styled.ChecboxContainer>
            <Styled.ButtonContainer>
              <Button type="submit" disabled={isLoading || !formFields.deleteAccountConfirmation} onClick={() => submitDeleteAccountForm}>Radera konto</Button>
            </Styled.ButtonContainer>
          </Styled.Form>
        )}
      />
    </Styled.ContentContainer>
  );
};
