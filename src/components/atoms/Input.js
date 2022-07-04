import React from 'react';
import styled from 'styled-components';

function Input({ error, ...rest }) {
  return (
    <Container>
      <StyledInput error={!!error} {...rest} />
      <Errmsg>{error}</Errmsg>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 10px;
`;

const StyledInput = styled.input`
  padding: 10px 20px;
  width: 100%;
  outline: none;
  border: 1px solid
    ${(props) =>
      props.error ? props.theme.colors.error : props.theme.colors.third};
  &:focus {
    border: 1px solid
      ${(props) =>
        props.error ? props.theme.colors.error : props.theme.colors.secondary};
  }
`;

const Errmsg = styled.span`
  color: ${(props) => props.theme.colors.error};
  font-size: 14px;
`;

export default Input;
