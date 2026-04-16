import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Simulasi data user (biasanya didapat setelah login API)
  const [user, setUser] = useState({ name: 'Budi', role: 'admin' }); 

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};