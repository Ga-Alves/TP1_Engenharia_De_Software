import React from 'react'
import ReactDOM from 'react-dom/client'

// style
import './index.css'

// pages
import App from './App'
import Dashboard
  from './pages/Dashboard/Dashboard';
import Login
  from './pages/Login/Login';
import List
 from './pages/Dashboard/SubjectGrid/SubjectGrid';

import {BrowserRouter, Routes, Route}from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='dashboard' element={<Dashboard />}>
            <Route path='list' element={<List />}/>
          </Route>
          <Route path='login' element={<Login />}>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
)
