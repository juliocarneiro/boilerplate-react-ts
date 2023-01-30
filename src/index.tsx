import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './404'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
