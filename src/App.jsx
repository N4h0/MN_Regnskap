import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hjem from './pages/Hjem';
import About from './pages/About';
import Contact from './pages/Contact';
import Team from './pages/Team';
import Link from './pages/Link';
import NotFound from './NotFound'; // Import NotFound komponent

// Import LanguageProvider
import { LanguageProvider } from './languages/LanguageContext';

function App() {
    return (
        <LanguageProvider>
            <Router>
                <div className="App">
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Hjem />} />
                        <Route path="/Team" element={<Team />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/Hjem" element={<Hjem />} />
                        <Route path="/Link" element={<Link />} />
                        {/* 404 */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    <Chatbot />
                    <Footer />
                </div>
            </Router>
        </LanguageProvider>
    );
}

export default App;
