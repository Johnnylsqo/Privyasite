import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  favorites: string[]; // IDs dos perfis favoritos
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
  toggleFavorite: (profileId: string) => void;
  isFavorite: (profileId: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string) => {
    // Mock login - em produção seria uma chamada API
    const mockUser: User = {
      id: '1',
      name: 'João Silva',
      email: email,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
      favorites: [],
    };
    setUser(mockUser);
  };

  const logout = () => {
    setUser(null);
  };

  const toggleFavorite = (profileId: string) => {
    if (!user) return;
    
    setUser(prev => {
      if (!prev) return null;
      
      const isFav = prev.favorites.includes(profileId);
      return {
        ...prev,
        favorites: isFav 
          ? prev.favorites.filter(id => id !== profileId)
          : [...prev.favorites, profileId]
      };
    });
  };

  const isFavorite = (profileId: string): boolean => {
    return user?.favorites.includes(profileId) || false;
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      login,
      logout,
      toggleFavorite,
      isFavorite,
    }}>
      {children}
    </AuthContext.Provider>
  );
};
