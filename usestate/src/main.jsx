import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import MY from './MY.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MY />
  </StrictMode>
)
