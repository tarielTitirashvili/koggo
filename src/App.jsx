import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import Investments from './pages/investments'
import Layout from './layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/investments',
    element: <Investments />,
  },
])
 
function App() {
  return <Layout>
    <RouterProvider router={router} />
  </Layout>
}

export default App
