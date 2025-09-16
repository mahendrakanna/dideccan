import React, { createContext, useState } from "react";
import axios from "axios"; 
import apiList from "../api.json";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const submitRegistration = async (formData) => {
    setLoading(true);

    try {
      console.log("🌍 BASE_URL from env:", BASE_URL);
      console.log("📌 API endpoint from apiList:", apiList.login.register);

      const url = `${BASE_URL}${apiList.login.register}`;
      console.log("🚀 Final API URL:", url);
      console.log("📦 Data being sent:", formData);

      // ✅ axios POST request
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data", 
        },
      });
      return response.data;
    } catch (err) {
      

      // axios error handling
      if (err.response) {  
        throw new Error(err.response.data.message || JSON.stringify(err.response.data));
      } else if (err.request) { 
        throw new Error("No response from server");
      } else { 
        throw err;
      }
    } finally { 
      setLoading(false);
    }
  };

  return (
    <RegistrationContext.Provider value={{ submitRegistration, loading }}>
      {children}
    </RegistrationContext.Provider>
  );
};
