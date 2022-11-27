import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {Provider} from "react-redux"
import {store} from './redux/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // Permttre de debug pour passer 2 fois 
  // <React.StrictMode> 
    <Provider store={store}>
      <App />
    </Provider>
  // </React.StrictMode>
)
