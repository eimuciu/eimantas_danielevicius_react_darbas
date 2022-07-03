import React, { useState } from 'react';
import Link from '../atoms/Link';
import styled from 'styled-components';
import Logo from '../atoms/Logo';

function NavBar() {
  const [activeLink, setActiveLink] = useState('login');

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <Header>
      <LogoContainer>
        <Logo />
      </LogoContainer>
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
      </Link>
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

export default NavBar;
