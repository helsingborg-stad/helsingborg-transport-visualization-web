import {
  Input, Button, Select, ClickOutsideCloser,
  Loading,
} from 'components';
import { useNavigate } from 'react-router-dom';
import { useEditZoneForm } from './hooks/useEditZoneForm';
import { MapSnippet } from '../../../../../components/MapSnippet';
import * as Styled from './styled';

export const EditZoneForm = () => {
  const navigate = useNavigate();
  const {
    featureCollection,
    setFieldValue,
    submitForm,
    errors,
    apiErrorText,
    addressStatus,
    clearSuggestions,
    ready,
    addressData,
    handleSelectAddress,
    activeAddress,
    isLoadingData,
  } = useEditZoneForm();

  const renderSuggestions = (index: number) => addressData.map((suggestion) => {
    const {
      place_id: placeId,
      structured_formatting: { main_text: mainText, secondary_text: secondaryText },
    } = suggestion;

    return (
      <Styled.ListItem
        key={placeId}
        onClick={handleSelectAddress(index, suggestion)}
        title={mainText}
      >
        <strong>{mainText}</strong>
        {' '}
        <small>{secondaryText}</small>
      </Styled.ListItem>
    );
  });

  if (isLoadingData) {
    return (
      <Loading />
    );
  }

  return (
    <Styled.ContentContainer>
      <form onSubmit={submitForm}>
        {featureCollection.features
          .map((zone, index) => (
            <Styled.SplitContainer key={zone.properties.id}>
              <Styled.InputContainer>
                <Input
                  label="Namn"
                  type="text"
                  value={zone.properties.name}
                  onChange={setFieldValue(index, 'name')}
                  name="name"
                  placeholder="Namn på zon"
                  error={errors[index]?.name}
                />
                <Input
                  label="GLN"
                  type="text"
                  value={zone.properties.gln}
                  onChange={setFieldValue(index, 'gln')}
                  name="gln"
                  placeholder="GLN (Lokaliseringsnummer)"
                  error={errors[index]?.gln}
                />
                <ClickOutsideCloser
                  onClick={() => {
                    if (activeAddress === zone.properties.id) { clearSuggestions(); }
                  }}
                  key={zone.properties.id}
                >
                  <>
                    <Input
                      label="Adress"
                      type="text"
                      value={zone.properties.address}
                      onChange={setFieldValue(index, 'address')}
                      placeholder="Adress till zon"
                      name="address"
                      error={errors[index]?.address}
                      disabled={!ready}
                    />
                    {addressStatus === 'OK' && activeAddress === zone.properties.id && <Styled.List>{renderSuggestions(index)}</Styled.List>}
                  </>
                </ClickOutsideCloser>
                <Input
                  label="Område"
                  type="text"
                  value={zone.properties.area}
                  onChange={setFieldValue(index, 'area')}
                  name="area"
                  placeholder="Område"
                  error={errors[index]?.area}
                />
                <Select label="Typ" value={zone.properties.type} name="type" onChange={setFieldValue(index, 'type')}>
                  <option value="delivery">Leverans zon</option>
                  <option value="distribution">Distributions zon</option>
                </Select>
              </Styled.InputContainer>
              <Styled.MapContainer>
                <MapSnippet zone={zone} />
              </Styled.MapContainer>
            </Styled.SplitContainer>
          ))}
        {apiErrorText && <Styled.ErrorText>{apiErrorText}</Styled.ErrorText>}
        <Styled.ButtonContainer>
          <Button type="submit" onClick={() => submitForm} primary>Spara</Button>
          <Button type="submit" onClick={() => navigate('/account/zones')} secondary>Avbryt</Button>
        </Styled.ButtonContainer>
      </form>
    </Styled.ContentContainer>
  );
};
