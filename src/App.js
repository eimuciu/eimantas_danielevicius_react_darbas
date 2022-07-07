import React from 'react';
import NavBar from './components/NavBar/NavBar';
import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import NotFoundPage from './components/pages/NotFoundPage';
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
          <Route
            path="/register"
            element={<RegisterPage makeMessage={makeMessage} />}
          />
          <Route
            path="/login"
            element={<LoginPage makeMessage={makeMessage} />}
          />
          <Route
            path="/add"
            element={
              <ProtectedRoute>
                <AddPage makeMessage={makeMessage} />
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
          <Route
            path="*"
            element={
              <ProtectedRoute>
                <NotFoundPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </ApplicationContainer>
      <Footer>Copyright &copy; 2022</Footer>
    </>
  );
}

const ApplicationContainer = styled.main`
  padding: 50px 100px;
  min-height: calc(100vh - 100px);
`;

const Footer = styled.footer`
  padding: 10px;
  text-align: center;
`;

export default App;
