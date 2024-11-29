import { useNavigate } from 'react-router-dom';
import { Button } from 'components';
import { ButtonSize } from 'components/Button/types';
import * as Styled from './styled';

export const SideBar = () => {
  const navigate = useNavigate();
  const handleNavigate = (path: string) => () => navigate(path);
  const activePath = window.location.pathname;

  return (
    <Styled.SideBarContainer>
      <Button
        onClick={handleNavigate('/account')}
        buttonSize={ButtonSize.SMALL}
        secondary={activePath === '/account'}
        tertiary={activePath !== '/account'}
        type="button"
      >
        Konto
      </Button>
      <Button
        onClick={handleNavigate('/account/zones')}
        buttonSize={ButtonSize.SMALL}
        secondary={activePath === '/account/zones'}
        tertiary={activePath !== '/account/zones'}
        type="button"
      >
        Hantera zoner
      </Button>
      <Button
        onClick={handleNavigate('/account/zones/create')}
        buttonSize={ButtonSize.SMALL}
        secondary={activePath === '/account/zones/create'}
        tertiary={activePath !== '/account/zones/create'}
        type="button"
      >
        Lägg till zoner
      </Button>
      <Button
        onClick={handleNavigate('/account/events/import')}
        buttonSize={ButtonSize.SMALL}
        secondary={activePath === '/account/events/import'}
        tertiary={activePath !== '/account/events/import'}
        type="button"
      >
        Importera data
      </Button>
      <Button
        onClick={handleNavigate('/account/about')}
        buttonSize={ButtonSize.SMALL}
        secondary={activePath === '/account/about'}
        tertiary={activePath !== '/account/about'}
        type="button"
      >
        Om Sam
      </Button>
    </Styled.SideBarContainer>
  );
};
