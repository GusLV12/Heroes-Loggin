import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { Herores } from './Herores'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
    <Herores />
  </React.StrictMode>
  </BrowserRouter>
)
