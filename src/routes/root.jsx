import React from 'react';
import NavBar from '../components/NavBar'; // Adjust path as necessary
import Footer from '../components/Footer'; // Adjust path as necessary
import Chatbot from '../components/Chatbot'; // Adjust path as necessary
import { Outlet } from "react-router-dom";
import './root.css';



const Layout = ({ children }) => {
    return (
        <>
            <NavBar />
            <div className = "App" id="detail">
                <Outlet />
            </div>
            <Chatbot />
            <Footer />
        </>
    );
};

export default Layout;