import React from 'react';
import styled from 'styled-components';

export function BigHeader({ text }) {
  return <StyledBigHeader>{text}</StyledBigHeader>;
}

const StyledBigHeader = styled.h1`
  font-size: 3rem;
  margin-bottom: 50px;
`;
