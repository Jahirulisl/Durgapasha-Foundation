import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

//from react route start
import {
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import { router } from './Routes/Routers';

//for helmet start
import { HelmetProvider } from 'react-helmet-async';
//for helmet end

//from react route start

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <div className='max-w-screen-xl mx-auto'>
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
  </StrictMode>,
)
