  import React from 'react'
  import { createBrowserRouter, RouterProvider } from 'react-router-dom'
  import Home from './pages/Home'
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element: <Home/>
    },
  ])
  const App = () => {
    return <RouterProvider router = {appRouter} /> 
  }

  export default App