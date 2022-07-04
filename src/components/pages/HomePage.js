import React, { useState, useEffect } from 'react';
import { getDataFromServer } from '../../api';
import CardsList from '../organisms/CardsList';

async function getData(setSkillsData) {
  const data = await getDataFromServer();
  setSkillsData(data);
}

function HomePage() {
  const [skillsData, setSkillsData] = useState([]);

  useEffect(() => {
    getData(setSkillsData);
  }, []);

  return (
    <>
      {skillsData.length === 0 ? (
        <div>Waiting for content...</div>
      ) : (
        <CardsList data={skillsData} />
      )}
    </>
  );
}

export default HomePage;
