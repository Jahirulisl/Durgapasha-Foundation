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
import AuthProvider from './providers/AuthProvider';
//for helmet end
//for tan stock query
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
//for make quary
const queryClient = new QueryClient();
//from react route start

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>

        <HelmetProvider>
          <div className='max-w-screen-xl mx-auto'>
            <RouterProvider router={router} />
          </div>
        </HelmetProvider>

      </QueryClientProvider>

    </AuthProvider>
  </StrictMode>,
)
