import React, { createContext, useState } from "react";
import apiList from '../api.json'

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const submitRegistration = async (formData) => {
    setLoading(true);

    try {
      const response = await fetch(`${BASE_URL}${apiList.login.register}`, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      // console.log('response',response)
      if (!response.ok) throw new Error(result.message || JSON.stringify(result));
      setLoading(false);
      return result;
    } catch (err) {
      setLoading(false);
      throw err;
    }
  };
  return (
    <RegistrationContext.Provider value={{ submitRegistration, loading }}>
      {children}
    </RegistrationContext.Provider>
  );
};
