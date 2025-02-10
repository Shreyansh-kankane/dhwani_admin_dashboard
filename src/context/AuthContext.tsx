import React, { createContext, useContext, useState, useCallback } from 'react';
import { User, AuthState, LoginCredentials } from '../types/auth';

interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: true,
  });

  const login = useCallback(async (credentials: LoginCredentials) => {
    // In a real app, this would make an API call
    // Simulated login for demo
    const user: User = {
      id: '1',
      email: credentials.email,
      name: 'John Doe',
      company: 'Acme Inc',
      role: 'admin',
    };

    setAuthState({ user, isAuthenticated: true });


  }, []);

  const logout = useCallback(() => {
    setAuthState({ user: null, isAuthenticated: false });
  }, []);

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}