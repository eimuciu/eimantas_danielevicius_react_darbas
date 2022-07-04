import { useState, useEffect } from 'react';

export function useLoading() {
  const [isLoading, setIsLoading] = useState(false);
  return [isLoading, setIsLoading];
}

export function useModal() {
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [showMessage]);

  const makeMessage = (msg, type) => {
    setMessage(msg);
    setMessageType(type);
    setShowMessage(true);
  };

  return { makeMessage, message, showMessage, messageType };
}
