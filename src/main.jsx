import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Hjem from "./pages/Hjem";
import OmOss from "./pages/Team";
import Frister from "./pages/Link";
import Contact from "./pages/Contact";
import Root from "./routes/root";
import NotFound from "./NotFound";
import { LanguageProvider } from './languages/LanguageContext'; // Adjust the path as necessary

const router = createBrowserRouter([
    {
        path: "/MN_Regnskap/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <Hjem />, 
            },
            {
                path: "/MN_Regnskap/hjem",
                element: <Hjem />,
            },
            {
                path: "/MN_Regnskap/om-oss",
                element: <OmOss />,
            },
            {
                path: "/MN_Regnskap/frister",
                element: <Frister />,
            },
            {
                path: "/MN_Regnskap/kontakt",
                element: <Contact />,
            },
            {
                path: "/MN_Regnskap/*",
                element: <NotFound />,
            }
        ]
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <LanguageProvider>
            <RouterProvider router={router} />
        </LanguageProvider>
    </React.StrictMode>,
)