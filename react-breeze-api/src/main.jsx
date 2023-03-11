import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Authentication } from './context/Authentication'
import { Context } from './context/Context'
import { MapsProvider } from './context/MapsProvider'
import App from './App'
import './index.css'

import { RecordsProvider } from './context/RecordsContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    
      <Context>
      <Authentication>
        <RecordsProvider>
            <App />
        </RecordsProvider>
      </Authentication>
      </Context>
    </BrowserRouter>
  </React.StrictMode>
)
