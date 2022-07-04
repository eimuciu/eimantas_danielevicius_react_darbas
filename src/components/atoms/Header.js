import React from 'react';
import styled from 'styled-components';

export function BigHeader({ text }) {
  return <StyledHeader>{text}</StyledHeader>;
}

const StyledHeader = styled.h1`
  font-size: 3rem;
  margin-bottom: 50px;
`;
