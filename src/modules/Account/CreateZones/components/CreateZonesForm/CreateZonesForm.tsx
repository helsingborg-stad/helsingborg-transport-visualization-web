/* eslint-disable react/jsx-props-no-spreading */
import { useDropzone } from 'react-dropzone';
import { Input, Button, Select } from 'components';
import { ClickOutsideCloser } from '../ClickOutsideCloser';
import { useCreateZonesForm } from '../../hooks/useCreateZonesForm';
import { MapSnippet } from '../MapSnippet';
import * as Styled from './styled';

export const CreateZonesForm = () => {
  const {
    onDrop,
    featureCollection,
    setFieldValue,
    reset,
    submitForm,
    errors,
    apiErrorText,
    addressStatus,
    clearSuggestions,
    ready,
    addressData,
    handleSelectAddress,
    activeAddress,
  } = useCreateZonesForm();

  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
    isDragActive,
  } = useDropzone({
    onDrop,
    accept: {
      'application/json': ['.geojson'],
    },
    maxFiles: 1,
  });

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

  return (
    <Styled.ContentContainer>
      {featureCollection
        ? (
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
                      placeholder="Namn på zon"
                      error={errors[index]?.name}
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
                      placeholder="Område"
                      error={errors[index]?.area}
                    />
                    <Select label="Typ" value={zone.properties.type} onChange={setFieldValue(index, 'type')}>
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
              <Button type="submit" onClick={reset} secondary>Rensa</Button>
            </Styled.ButtonContainer>
          </form>
        )
        : (
          <Styled.DropArea {...getRootProps({ isFocused, isDragAccept, isDragReject })}>
            <input {...getInputProps()} />
            {
        isDragActive
          ? <p>Ladda upp zoner...</p>
          : <p>Dra zoner eller klicka för att ladda upp</p>
      }
          </Styled.DropArea>
        )}

    </Styled.ContentContainer>
  );
};
