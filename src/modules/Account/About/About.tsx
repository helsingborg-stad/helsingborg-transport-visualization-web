import { SideBar } from 'components/SideBar';
import { Link } from 'components/Link';
import * as Styled from './styled';

export const About = () => (
  <Styled.ContentContainer>
    <SideBar />
    <Styled.InfoContainer>
      <Styled.Header>Om Sam</Styled.Header>
      <Styled.Text>
        Sam samlar in transportdata för att kunna dela
        datan mellan olika aktörer i transportkedjan.
        Genom tillgänglig data kan beställaren få bättre förståelse för hur
        transporterna inom olika områden går och kan använda datan för
        att bli smartare beställare. Leverantörer och transportörer kan använda datan för att
        hitta samarbeten och samlastning. Målet med Sam är smartare
        logistik kring transporter och minskade
        körningar för klimatets skull.
        <br />
        <br />
        <Link label="Läs mer om Sam" href="https://helsingborg.se/trafik-och-stadsplanering/planering-och-utveckling/trafikplanering/godstransporter/sam-ett-steg-pa-vagen-for-hallbara-transporter/" />

      </Styled.Text>
      <h2 style={{ marginBottom: '10px', marginTop: '60px' }}>Så här fungerar Sam</h2>
      <Styled.Text>
        Tjänsten Sam består av en mobilapp som används av förare,
        och den här webbsidan där alla spårade leveranser samlas.
        Just nu är tjänsten så pass utvecklad att vi kan beskriva transporter
        som går till och från olika verksamheter i staden, via geofencing*.
        Det betyder att endast leveranser till geofencade adresser registreras - andra stopp
        på vägen kommer inte registreras på webbsidan.

      </Styled.Text>
      <br />
      <Styled.Text>
        <i>
          *Geofence är en internationell fackterm.
          Den kan översättas med ”geostaket”
          och är ett geografiskt avgränsat eller definierat område som bestämts
          och som ”inhägnats” med en programvara
        </i>
      </Styled.Text>
      <h2 style={{ marginBottom: '10px', marginTop: '60px' }}>Leverera transportdata till Sam</h2>
      <Styled.Text style={{ marginBottom: '8px' }}>
        Det finns två sätt att leverera data till Sam.
      </Styled.Text>
      <ol style={{ paddingLeft: '20px' }}>
        <li>
          <Styled.Text>
            Använd appen Sam
            <br />
            Föraren laddar ner appen till sin telefon.
            Föraren startar spårningen i appen vid start av en körning.
            Varje gång transporten befinner sig inom ett geofencat område blir det en
            datapunkt som sparas och blir synlig på webbsidan.
          </Styled.Text>
        </li>
        <li>
          <Styled.Text>
            Leverera en rapport
            <br />
            Istället för att använda appen Sam kan
            leverantör eller transportör hämta motsvarande data från sitt
            logistiksystem/TMS (Transport Management System) och skicka
            rapport till kontaktperson enligt överenskommet intervall
            {' '}
            <Link href="/Template.xlsx" download="mall.xlsx" label="[Mall för rapport]" />
          </Styled.Text>
        </li>
      </ol>
    </Styled.InfoContainer>
  </Styled.ContentContainer>
);
