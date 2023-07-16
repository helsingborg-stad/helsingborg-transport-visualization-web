/* eslint-disable react/jsx-props-no-spreading */
import { useDropzone } from 'react-dropzone';
import { Input, Button, Select } from 'components';
import { useCreateZonesForm } from '../../hooks/useCreateZonesForm';
import { MapSnippet } from '../MapSnippet';
import * as Styled from './styled';

export const CreateZonesForm = () => {
  const {
    onDrop, featureCollection, setFieldValue, reset, submitForm, errors,
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
                    <Input
                      label="Adress"
                      type="text"
                      value={zone.properties.address}
                      onChange={setFieldValue(index, 'address')}
                      placeholder="Adress till zon"
                      error={errors[index]?.address}
                    />
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
