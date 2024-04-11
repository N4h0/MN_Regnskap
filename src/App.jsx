import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './routes/root'; // Juster import-stien etter behov
import HomePage from './pages/Home';
import LinkPage from './pages/Link';
import TeamPage from './pages/Team';
import ContactPage from './pages/Contact';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="hjem" element={<HomePage />} />
                    <Route path="link" element={<LinkPage />} />
                    <Route path="/MN_Regnskap/om-oss" element={<TeamPage />} />
                    <Route path="contact" element={<ContactPage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
