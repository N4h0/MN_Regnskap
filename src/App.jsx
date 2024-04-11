import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './routes/root'; // Pass på at stien til denne importen er korrekt
import HomePage from './pages/Home';
import LinkPage from './pages/Link';
import TeamPage from './pages/Team';
import ContactPage from './pages/Contact';

// Sett basename basert på miljøvariabel eller hardkodet, hvis miljøvariabel ikke er tilgjengelig
const basename = process.env.PUBLIC_URL || '/MN_Regnskap';

function App() {
    return (
        <Router basename={basename}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="hjem" element={<HomePage />} />
                    <Route path="link" element={<LinkPage />} />
                    <Route path="om-oss" element={<TeamPage />} />
                    <Route path="contact" element={<ContactPage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
