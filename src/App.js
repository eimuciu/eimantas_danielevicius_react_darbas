import React from 'react';
import NavBar from './components/NavBar/NavBar';
import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import AddPage from './components/pages/AddPage';
import Modal from './components/atoms/Modal';
import styled from 'styled-components';
import { useAuthCtx } from './store/AuthProvider';
import { useModal } from './hooks';

function ProtectedRoute({ children }) {
  const { isUserLoggedIn } = useAuthCtx();
  if (isUserLoggedIn) {
    return children;
  }
  return <Navigate to="/login" replace={true} />;
}

function App() {
  const { makeMessage, message, showMessage, messageType } = useModal();
  return (
    <>
      <Modal message={message} type={messageType} show={showMessage} />
      <NavBar />
      <ApplicationContainer>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/login"
            element={<LoginPage makeMessage={makeMessage} />}
          />
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

const ApplicationContainer = styled.main`
  padding: 50px 100px;
`;

export default App;
