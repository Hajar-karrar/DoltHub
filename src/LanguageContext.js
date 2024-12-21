import React, { createContext, useState } from "react";

// Create the context
export const LanguageContext = createContext();

// Define translations
const translations = {
  en: {
    title: "Welcome To DoltHup",
    paragraph:
      "This is my official website to showcase all my work in  web",
    par2:"development (React)."  
  },
  fr: {
    title: "Bienvenue à DoltHup",
    paragraph:
      "Ceci est mon site officiel pour présenter tout mon travail ",
      par2:"en développement web (React)." 
  },
  es: {
    title: "Bienvenido a DoltHup",
    paragraph:
      "Este es mi sitio oficial para mostrar todo mi trabajo ",
      par2:"en desarrollo web (React)." 
  },
};

// Create a provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider
      value={{ language, translations: translations[language], toggleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
