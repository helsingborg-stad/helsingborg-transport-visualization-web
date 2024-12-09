import { useEffect, useRef } from 'react';
import { useLoadScript } from '@react-google-maps/api';
import { useAuth } from 'hooks/useAuth';
import { Link, SideBar } from 'components';
import { CreateZonesForm } from './components';
import * as Styled from './styled';

const { VITE_GOOGLE_MAPS_API_KEY } = import.meta.env;
export const CreateZones = () => {
  const { hasToken } = useAuth();
  const libraries = useRef<any>(['places']);
  const isAuthenticated = hasToken();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: VITE_GOOGLE_MAPS_API_KEY,
    libraries: libraries.current,
  });

  useEffect(() => {
    if (!isAuthenticated) {
      window.location.href = '/auth/login';
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <Styled.ContentContainer>
      <SideBar />
      <Styled.FormContainer>
        <Styled.Header>Lägg till zoner</Styled.Header>
        <p>
          För att en leverans eller lastning ska bli registrerad behöver den geografiska
          platsen läggas till som en geofencad zon. Gör så här för att skapa en zon:
        </p>
        <ol style={{ paddingLeft: '20px', margin: '10px 0' }}>
          <li>
            Gå till sidan
            {' '}
            <Link label="geojson.io" href="https://geojson.io/#map=2/0/20" />
          </li>
          <li>
            Skriv in adressen för den geografiska platsen i sökfältet.
          </li>
          <li>
            Aktivera Draw polygon.
          </li>
          <li>
            Markera området med polygonverktyget och se till att
            last/leveransdelen för platsen inkluderas.
          </li>
          <li>
            När du lagt till en eller flera geofencade zoner trycker du
            {' '}
            <b>Save - GeoJSON</b>
            . Filen laddas ner till din dator.
          </li>
          <li>
            Dra in filen i fältet nedan och följ instruktioner.
          </li>
        </ol>
        {isLoaded && <CreateZonesForm />}
      </Styled.FormContainer>
    </Styled.ContentContainer>
  );
};
