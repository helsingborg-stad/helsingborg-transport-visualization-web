import MenuIcon from 'assets/menu_icon.svg';
import PersonIcon from 'assets/person_icon.svg';
import { useHandleClickOutside } from 'hooks';
import { useRef, useState } from 'react';
import { useAuth } from 'hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import * as Styled from './styled';

export const Menu = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { logOut } = useAuth();

  useHandleClickOutside({
    ref: containerRef,
    setVisiblity: () => setIsOpen(false),
  });

  const logOutAndRedirect = () => {
    logOut();
    navigate('/auth');
  };

  return (
    <Styled.Menu ref={containerRef}>
      <Styled.Container onClick={() => setIsOpen(!isOpen)}>
        <img src={MenuIcon} alt="menu icon" />
        <img src={PersonIcon} alt="person icon" />
      </Styled.Container>
      {isOpen && (
      <Styled.MenuList>
        <Styled.SectionOne>
          <Styled.BoldText onClick={() => {
            navigate('/');
            setIsOpen(false);
          }}
          >
            Lista
          </Styled.BoldText>
          <Styled.BoldText onClick={() => navigate('/map')}>Karta</Styled.BoldText>
        </Styled.SectionOne>
        <Styled.SectionTwo>
          <Styled.Text onClick={() => navigate('/account')}>Konto</Styled.Text>
          <Styled.Text onClick={() => navigate('/account/zones')}>Hantera zoner</Styled.Text>
        </Styled.SectionTwo>
        <Styled.SectionThree>
          <Styled.Text onClick={() => logOutAndRedirect()}>Logga ut</Styled.Text>
        </Styled.SectionThree>
      </Styled.MenuList>
      )}
    </Styled.Menu>
  );
};
