import React from "react";
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


const App = () => {
    return (


        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<LogIn />} />
                <Route path="/Home" element={<ProjectHome />} />
                <Route path="/contact" element={<ContactForm />} />
                <Route path="/product" element={<Product />} />
                <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
            <Footer />
        </Router>


    );
};

export default App;