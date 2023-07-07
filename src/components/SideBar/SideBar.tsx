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
    </Styled.SideBarContainer>
  );
};
