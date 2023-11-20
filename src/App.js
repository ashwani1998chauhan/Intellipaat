// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import BlogList from "./components/BlogList";
import Contact from "./components/Contact";
import PageNotFound from "./components/PageNotFound";
import Product from "./components/Product";
import ContactForm from "./components/ContactForm";
import LogIn from "./components/LogIn";
import ProjectHome from "./components/ProjectHome";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import "./App.css"; // Import the CSS file

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`app ${darkMode ? "dark-mode" : ""}`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/Home" element={<ProjectHome />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/product" element={<Product />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
        <button onClick={toggleDarkMode}>
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>
    </Router>
  );
};

export default App;
