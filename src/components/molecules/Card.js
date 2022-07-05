import React from 'react';
import styled from 'styled-components';

function Card({ title, description }) {
  return (
    <MainContainer>
      <h3>{title}</h3>
      <p>{description}</p>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  box-shadow: 4px 5px 12px lightgray;
  border-radius: 3px;
  padding: 20px;
  flex-grow: 1;
`;

export default Card;
