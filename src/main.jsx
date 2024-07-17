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



const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>

      <ApiProvider>
        <App />
      </ApiProvider>
          
    </QueryClientProvider>
  </React.StrictMode>,
)
