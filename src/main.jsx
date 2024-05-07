import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hjem from "./pages/Hjem";
import OmOss from "./pages/Team";
import Tjenester from "./pages/Tjenester";
import Frister from "./pages/Link";
import Contact from "./pages/Contact";
import Root from "./routes/root";
import NotFound from "./NotFound";
import { LanguageProvider } from './languages/LanguageContext';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <Hjem />,
            },
            {
                path: "/hjem",
                element: <Hjem />,
            },
            {
                path: "/om-oss",
                element: <OmOss />,
            },
            {
                path: "/tjenester",
                element: <Tjenester />,
            },
            {
                path: "/frister",
                element: <Frister />,
            },
            {
                path: "/kontakt",
                element: <Contact />,
            },
            {
                path: "*",
                element: <NotFound />,
            }
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <LanguageProvider>
            <RouterProvider router={router} />
        </LanguageProvider>
    </React.StrictMode>,
);