import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import myCreatedRoute from './Router/Route'

export const GlobalContext = createContext();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalContext.Provider value={{user : 'true'}}>
    <RouterProvider router={myCreatedRoute}></RouterProvider>
    </GlobalContext.Provider>
    
  </React.StrictMode>,
)
