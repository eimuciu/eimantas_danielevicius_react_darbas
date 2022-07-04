import React from 'react';
import NavBar from './components/NavBar/NavBar';
import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import AddPage from './components/pages/AddPage';
import styled from 'styled-components';
import { useAuthCtx } from './store/AuthProvider';

function ProtectedRoute({ children }) {
  const { isUserLoggedIn } = useAuthCtx();
  if (isUserLoggedIn) {
    return children;
  }
  return <Navigate to="/login" replace={true} />;
}

function App() {
  return (
    <>
      <NavBar />
      <ApplicationContainer>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/add"
            element={
              <ProtectedRoute>
                <AddPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </ApplicationContainer>
    </>
  );
}

const ApplicationContainer = styled.div`
  padding: 50px 100px;
`;

export default App;
