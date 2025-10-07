import { createBrowserRouter } from "react-router";
import Home from '../Pages/Home'
import Apps from '../Pages/Apps'
import Installation from '../Pages/Installation'

const router = createBrowserRouter([
  {
    path: '/',
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
])


export default router