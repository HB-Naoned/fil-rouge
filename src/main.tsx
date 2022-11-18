import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // Permttre de debug pour passer 2 fois 
  // <React.StrictMode> 
    <App />
  // </React.StrictMode>
)
