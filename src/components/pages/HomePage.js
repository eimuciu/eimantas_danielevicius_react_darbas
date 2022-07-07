import React, { useState, useEffect } from 'react';
import { getDataFromServer } from '../../api';
import { BigHeader } from '../atoms/Header';
import CardsList from '../organisms/CardsList';
import { useLoading } from '../../hooks';

async function getData(setSkillsData, setIsLoading) {
  const data = await getDataFromServer();
  setSkillsData(data);
  setIsLoading(false);
}

function HomePage() {
  const [skillsData, setSkillsData] = useState([]);
  const [isLoading, setIsLoading] = useLoading();

  useEffect(() => {
    setIsLoading(true);
    getData(setSkillsData, setIsLoading);
  }, [setIsLoading]);

  return (
    <>
      {isLoading ? (
        <div>Waiting for content...</div>
      ) : skillsData.length === 0 ? (
        <div>No records added yet...</div>
      ) : (
        <>
          <BigHeader text={'Skills'} />
          <CardsList data={skillsData} />
        </>
      )}
    </>
  );
}

export default HomePage;
