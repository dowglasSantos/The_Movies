import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import {Main} from './pages/Main';
import {Details} from './pages/Details';

import './global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/details/:id' element={<Details />} />
    </Routes>
  </BrowserRouter>
)
