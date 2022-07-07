import React from 'react';
import logo from '../../assets/logo.png';
import styled from 'styled-components';

function Logo() {
  return <Image alt="logo" src={logo} />;
}

const Image = styled.img`
  height: 35px;
`;

export default Logo;
