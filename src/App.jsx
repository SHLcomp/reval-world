import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Services from './pages/Services'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: '/services',
      element: <Services />
    }
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
