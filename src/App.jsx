import './App.css'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import Investments from './pages/investments'
import Layout from './layout'
import { Route, Routes } from 'react-router-dom'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />,
//   },
//   {
//     path: '/investments',
//     element: <Investments />,
//   },
// ])
 
function App() {
  return <Layout>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/investments' element={<Investments/>} />
  </Routes>
  </Layout>
  // <Layout setHome={setHome}>
  //   {home ? <Home /> : <Investments />}
  // </Layout>
}

export default App
