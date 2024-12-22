import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import "./Home.css";

export default function Home() {
  const { translations, toggleLanguage } = useContext(LanguageContext);
  

  return (
    <div className="bo">
      <div className="Home">
        <div className="info">
        <h1 className='tit'>Welcom <span>To</span> DoltHup</h1>
          <p className="par">{translations.paragraph} <br /> {translations.par2}</p>
          <div className="language-select">
            <select
              onChange={(e) => toggleLanguage(e.target.value)}
              defaultValue="en"
            >
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="es">Español</option>
            </select>
          </div>
        </div>

        <div className="img-box">
          <img src="pc22.png" alt="" className="main-img" />
        </div>
      </div>
    </div>
  );
}
