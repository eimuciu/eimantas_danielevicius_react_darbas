import React from 'react';
import styled from 'styled-components';

function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  padding: 10px 20px;
  border-radius: 3px;
  background: ${(props) => props.theme.colors.primary};
`;

export default Button;
