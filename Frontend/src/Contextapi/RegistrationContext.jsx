import React, { createContext, useState } from "react";

export const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const submitRegistration = async (formData) => {
    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:8000/api/register/", {
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
