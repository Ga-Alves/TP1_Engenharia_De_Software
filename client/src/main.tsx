import React from 'react'
import ReactDOM from 'react-dom/client'

// style
import './index.css'

// pages
import App from './App'

// context
import {AuthProvider} from './context/authContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <App/>
    </AuthProvider>
  </React.StrictMode>
)
