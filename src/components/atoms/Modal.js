import React from 'react';
import styled from 'styled-components';

export function Modal({ message, type, show }) {
  return (
    <MainContainer show={show} type={type}>
      {message}
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: fixed;
  top: 75px;
  right: 25px;
  padding: 10px 20px;
  border: 1px solid
    ${(props) =>
      props.type === 'success'
        ? 'darkgreen'
        : props.type === 'error'
        ? 'darkred'
        : null};
  color: ${(props) =>
    props.type === 'success'
      ? 'darkgreen'
      : props.type === 'error'
      ? 'darkred'
      : null}; ;
`;

export default Modal;
