import React from 'react';
import styled from 'styled-components';

function TextArea({ error, ...rest }) {
  return (
    <Container>
      <StyledTextArea rows={10} error={!!error} {...rest} />
      <Errmsg>{error}</Errmsg>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 20px;
`;

const StyledTextArea = styled.textarea`
  resize: vertical;
  padding: 10px 20px;
  width: 100%;
  outline: none;
  border: 1px solid
    ${(props) =>
      props.error ? props.theme.colors.error : props.theme.colors.main};
  &:focus {
    border: 1px solid
      ${(props) =>
        props.error ? props.theme.colors.error : props.theme.colors.secondary};
  }
`;

const Errmsg = styled.span`
  color: ${(props) => props.theme.colors.error};
  font-size: 13px;
`;

export default TextArea;
