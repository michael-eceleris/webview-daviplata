import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";

const ImeiContext = createContext();

export const ImeiProvider = ({ children }) => {
  const [imei, setImei] = useState("");
  const [terms, setTerms] = useState(false);
  return (
    <ImeiContext.Provider
      value={{
        imei,
        setImei,
        terms,
        setTerms,
      }}
      children={children}
    />
  );
};

export const useImei = () => {
  const imei = useContext(ImeiContext);
  return imei;
};
