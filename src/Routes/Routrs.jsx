import { createBrowserRouter } from "react-router";
import Home from '../Pages/Home'
import Apps from '../Pages/Apps'
import Installation from '../Pages/Installation'
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import HomeCard from "../Pages/HomeCard";
import Ratings from "../Pages/Ratings";


const router = createBrowserRouter([
  

  {
    
    path: '/',
    element: <MainLayout/>,
    
    children: [
{
    index: true,
    element: <Home />,
    loader: () => fetch("/HomeCardData.json"),

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
    path: '/',
    element: <HomeCard/>,
  },
  {
    path: '/Ratings/:id',
    element: <Ratings/>
  },

    ]
  },
  {
    path: '*',
    element: <ErrorPage/>
  }
  
])


export default router