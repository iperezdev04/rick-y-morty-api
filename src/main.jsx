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


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>

      <ApiProvider>
        <Router>
          <App />
        </Router>

      </ApiProvider>

    </QueryClientProvider>
  </React.StrictMode>,
)
