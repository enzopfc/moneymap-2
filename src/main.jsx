import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import { AuthProvider } from './context/AuthContext'
import { DemoProvider } from './context/DemoContext'

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DemoProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </DemoProvider>
    </BrowserRouter>
  </React.StrictMode>
)
