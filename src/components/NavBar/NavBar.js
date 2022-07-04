import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Link from '../atoms/Link';
import Logo from '../atoms/Logo';
import { useAuthCtx } from '../../store/AuthProvider';

function NavBar() {
  const { isUserLoggedIn, logout } = useAuthCtx();
  const [activeLink, setActiveLink] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const formatedlink =
      location.pathname === '/' ? 'home' : location.pathname.slice(1);
    if (isUserLoggedIn) {
      setActiveLink(formatedlink);
    } else {
      setActiveLink(formatedlink);
    }
  }, [isUserLoggedIn, location]);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <Header>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      {isUserLoggedIn ? (
        <>
          {' '}
          <Link
            clickHandler={() => {
              handleLinkClick('home');
            }}
            active={activeLink === 'home' && true}
            to={'/'}
          >
            {'Home'}
          </Link>
          <Link
            clickHandler={() => {
              handleLinkClick('add');
            }}
            active={activeLink === 'add' && true}
            to={'/add'}
          >
            {'Add  '}
          </Link>{' '}
          <LogoutContainer onClick={logout}>Logout</LogoutContainer>
        </>
      ) : (
        <>
          <Link
            clickHandler={() => {
              handleLinkClick('login');
            }}
            active={activeLink === 'login' && true}
            to={'/login'}
          >
            {'Login'}
          </Link>
          <Link
            clickHandler={() => {
              handleLinkClick('register');
            }}
            active={activeLink === 'register' && true}
            to={'/register'}
          >
            {'Register'}
          </Link>
        </>
      )}
    </Header>
  );
}

const Header = styled.header`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 20px;
  text-align: center;
  position: relative;
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50px;
  transform: translateY(-50%);
`;

const LogoutContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 50px;
  transform: translateY(-50%);
  cursor: pointer;
`;

export default NavBar;
