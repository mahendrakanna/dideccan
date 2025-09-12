import React, { createContext, useState } from "react";

export const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const submitRegistration = async (formData) => {
    setLoading(true);
    // http://192.168.0.13:8000/api/register/
    try {
      const response = await fetch("http://192.168.0.13:8003/api/register/", {
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
