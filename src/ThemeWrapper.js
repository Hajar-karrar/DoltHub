// ThemeWrapper.js
import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';

const ThemeWrapper = ({ children }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const location = useLocation();
  const [shouldApplyDarkMode, setShouldApplyDarkMode] = useState(false);

  useEffect(() => {
    // Apply dark mode only to specific routes
    if (location.pathname === '/' || location.pathname === '/todo') {
      setShouldApplyDarkMode(isDarkMode);
    } else {
      setShouldApplyDarkMode(false);
    }
  }, [location.pathname, isDarkMode]);

  return (
    <div className={shouldApplyDarkMode ? 'dark-mode' : ''}>
      {children}
    </div>
  );
};

export default ThemeWrapper;
