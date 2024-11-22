import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    return false;
  }

  try {
    const decodedToken = JSON.parse(atob(token.split('.')[1])); 
    const expirationTime = decodedToken.exp * 1000; 
    const currentTime = Date.now();

    return currentTime <= expirationTime; 
  } catch (error) {
    return false; 
  }
};

const useProtected = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/');
    }
  }, [navigate]);

  if (!isAuthenticated()) {
    navigate('/');
  }

  return children; 
};

export default useProtected;