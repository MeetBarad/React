import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Car from './Car.jsx'
import Car1 from './Car1.jsx'
import Car2 from './Car2.jsx'
import Car3 from './Car3.jsx'
import Car4 from './Car4.jsx'
import Car5 from './Car5.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Car color="red" brand="Toyota" model="Camry" />
    <Car1  brand="Honda" />
    <Car2  />
    <Car3  />
    <Car4 color="blue" />
    <Car5 color="green" />
  </StrictMode>
)
