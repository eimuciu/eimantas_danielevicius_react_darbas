import React from 'react';
import styled from 'styled-components';
import Card from '../molecules/Card';

function CardsList({ data }) {
  return (
    <MainContainer>
      {data.map((dataObj) => (
        <Card
          key={dataObj.id}
          title={dataObj.title}
          description={dataObj.description}
        />
      ))}
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

export default CardsList;
