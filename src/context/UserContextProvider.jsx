import { createContext, useState } from 'react';

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [list, setList] = useState([]);

  

  return (
    <UserContext.Provider value={{ list, setList }}>
      {children}
    </UserContext.Provider>
  );
}
