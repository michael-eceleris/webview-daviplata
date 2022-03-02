import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return <UserContext.Provider value={{ user, setUser }} children={children} />;
};

export const useUser = () => {
  const user = useContext(UserContext);
  return user;
};
