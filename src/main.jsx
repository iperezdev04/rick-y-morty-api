import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ApiProvider } from './hooks/ApiContext.jsx'
import { BrowserRouter as Router } from 'react-router-dom'


/*
import { PrimeReactProvider } from 'primereact/api';
*/


import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';
import 'primeflex/primeflex.css';  
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <PrimeReactProvider>
      <QueryClientProvider client={queryClient}>

        <ApiProvider>
          <Router>
            <App />
          </Router>

        </ApiProvider>

      </QueryClientProvider>

    </PrimeReactProvider>



  </React.StrictMode>,
)
