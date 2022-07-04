import React from 'react';
import NavBar from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import AddPage from './components/pages/AddPage';
import styled from 'styled-components';

function App() {
  return (
    <>
      <NavBar />
      <ApplicationContainer>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </ApplicationContainer>
    </>
  );
}

const ApplicationContainer = styled.div`
  min-height: 100vh;
  padding: 50px 100px;
`;

export default App;
