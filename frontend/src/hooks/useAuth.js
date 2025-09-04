import { useState } from 'react';
import { loginUser, registerUser } from '../utils/api';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (credentials) => {
    setIsLoading(true);
    try {
      const result = await loginUser(credentials);
      if (result.success) {
        setUser(result.data);
        return { success: true, message: 'Login Successful\nWelcome!' };
      } else {
        return { success: false, message: 'Login Failed\nPlease try again later' };
      }
    } catch (error) {
      return { success: false, message: 'Login Failed\nPlease try again later' };
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData) => {
    setIsLoading(true);
    try {
      const result = await registerUser(userData);
      if (result.success) {
        return { success: true, message: 'Registration Successful\nWelcome to Framzy!' };
      } else {
        return { success: false, message: 'Registration Failed\nPlease try again later' };
      }
    } catch (error) {
      return { success: false, message: 'Registration Failed\nPlease try again later' };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return {
    user,
    isLoading,
    login,
    register,
    logout
  };
};