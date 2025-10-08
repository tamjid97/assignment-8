import { createBrowserRouter } from "react-router";
import Home from '../Pages/Home'
import Apps from '../Pages/Apps'
import Installation from '../Pages/Installation'
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import ErrorApp from "../Pages/ErrorApp";
import HomeCard from "../Pages/HomeCard";


const router = createBrowserRouter([
  

  {
    errorElement: <ErrorApp/>,
    path: '/',
    element: <MainLayout/>,
    
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
  {
    index: true,
    element: <HomeCard/>,
  },

    ]
  },
  {
    path: '*',
    element: <ErrorPage/>
  }
  
])


export default router