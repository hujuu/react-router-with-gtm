import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";
import { HelmetProvider } from 'react-helmet-async';
import TagManager from 'react-gtm-module';
import './index.css'

const tagManagerArgs = {
    gtmId: 'GTM-NV8BP88'    // replace this with your GTM ID
}

TagManager.initialize(tagManagerArgs)

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root title="Home" />,
        errorElement: <ErrorPage />,
    },
    {
        path: "contacts/:contactId",
        element: <Contact title="Contact" />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
)
