import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Lifecycle from './Lifecycle.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Lifecycle />
  </StrictMode>
)
