// ContactForm.js

import React from "react";
import "./ContactForm.css"; // Import the CSS file
import { useTheme } from "../ThemeContext";

const ContactForm = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`contact-form-container ${darkMode ? "dark-mode" : ""}`}>
      <form>
        <label className="formlabel">Name</label><br />
        <input type="text" className="form-input" /><br />
        <label className="formlabel">Query</label><br />
        <input type="text" className="form-input" /><br />

        <button className="form-button">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
