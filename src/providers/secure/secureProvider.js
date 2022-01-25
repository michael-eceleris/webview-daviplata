import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";

const SecureContext = createContext();

export const SecureProvider = ({ children }) => {
  const [insurranceValue, setInsurranceValue] = useState("");
  const [dataSecure, setDataSecure] = useState(null);
  const [terms, setTerms] = useState(false);

  return (
    <SecureContext.Provider
      value={{
        insurranceValue,
        setInsurranceValue,
        terms,
        setTerms,
        dataSecure,
        setDataSecure,
      }}
      children={children}
    />
  );
};

export const useSecure = () => {
  const secure = useContext(SecureContext);
  return secure;
};
