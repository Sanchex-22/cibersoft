import React, { useCallback, useContext, useState } from 'react';
import Context from '../context/userContext';
import { authServices } from '../services/authentication';

// Define types for the context value and hook return type
interface UserContextValue {
  jwt: string | null;
  setJWT: React.Dispatch<React.SetStateAction<string | null>>;
}

interface UseUserReturn {
  isLogged: boolean;
  isLoginLoading: boolean;
  hasLoginError: boolean;
  login: ({ email, password }: { email: string; password: string }) => Promise<void>;
  logout: () => void;
}

export default function useUser(): UseUserReturn {
  const { jwt, setJWT } = useContext(Context) as UserContextValue;
  const [state, setState] = useState<{ loading: boolean; error: boolean }>({ loading: false, error: false });

  const login = useCallback(async ({ email, password }: { email: string; password: string }): Promise<void> => {
    setState({ loading: true, error: false });

    try {
      const token = await authServices.login(email, password);
      // window.sessionStorage.setItem('jwt', token);
      setState({ loading: false, error: false });
      setJWT(token);
    } catch (err) {
      window.sessionStorage.removeItem('jwt');
      setState({ loading: false, error: true });
      console.error(err);
      throw err; // Rethrow the error to be handled by the calling function
    }
  }, [setJWT]);

  const logout = useCallback(async() : Promise<void> => {
    if (jwt) {
      authServices.logout(jwt.replace(/^"|"$/g, ''));
      setJWT(null);
    }
  }, [setJWT, jwt]);

  return {
    isLogged: Boolean(jwt),
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    login,
    logout
  };
}
