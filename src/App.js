import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import Product from "./components/Product";
import ContactForm from "./components/ContactForm";
import LogIn from "./components/LogIn";
import ProjectHome from "./components/ProjectHome";
import FooterComponent from "./components/Footer";
import Navbar from "./components/Navbar";
import { useTheme, ThemeProvider } from "./ThemeContext";
import "./App.css";

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

const AppContent = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <Router>
      <div className={`app ${darkMode ? "dark-mode" : ""}`}>
        <Navbar toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/Home" element={<ProjectHome />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/product" element={<Product />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <FooterComponent />
      </div>
    </Router>
  );
};

export default App;
