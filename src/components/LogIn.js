import React from "react";
import { useTheme } from "../ThemeContext";
import "./LogInForm.css"; // Import the CSS file

const LogIn = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`login-container ${darkMode ? "dark-mode" : ""}`}>
      <form className={`login-form ${darkMode ? "dark-mode" : ""}`}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </form>
    </div>
  );
};

export default LogIn;
