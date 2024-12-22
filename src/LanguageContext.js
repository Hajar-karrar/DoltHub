import React, { createContext, useState } from "react";

// Create the context
export const LanguageContext = createContext();

// Define translations
const translations = {
  en: {
    title: "Welcome To DoltHup",
    paragraph:
      "I am Hajar Karrar, a Full Stack Web Developer, ",
    par2:"and this is my website to present all my work in" ,
    par3:"web development (React)" 
  },
  fr: {
    title: "Bienvenue à DoltHup",
    paragraph:
      "Je suis Hajar Karrar, une developpeuse Web Full Stack ,  ",
      par2:"et ceci est mon site Web pour presenter tout mon travail en " ,
      par3:"développement web (React)."
  },
  es: {
    title: "Bienvenido a DoltHup",
    paragraph:
      "Soy Hajar Karrar, desarrollador web Full Stack, ",
      par2:"y este es mi sitio web para presentar todo mi trabajo en" ,
       par3:"desarrollo web (Reaccionar)."
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
