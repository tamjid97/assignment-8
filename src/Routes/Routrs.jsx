import { createBrowserRouter } from "react-router";
import Home from '../Pages/Home'
import Apps from '../Pages/Apps'
import Installation from '../Pages/Installation'
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import ErrorApp from "../Pages/ErrorApp";


const router = createBrowserRouter([
  

  {
    path: '/',
    element: <MainLayout/>,
    errorElement: <ErrorApp/>,
    children: [
{
    index: true,
    element: <Home />,
  },
  {
    path: '/Apps',
    element: <Apps/>,
  },
  {
    path: '/Installation',
    element: <Installation/>,
  },
    ]
  },
  {
    path: '*',
    element: <ErrorPage/>
  }
  
])


export default router