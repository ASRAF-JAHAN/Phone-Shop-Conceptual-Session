import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import Favorites from "../Pages/Favorites/Favorites";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Phone from "../Pages/Phone/Phone";


const myCreatedRoute = createBrowserRouter([
    {
      path:'/',
      element:<MainLayout></MainLayout> ,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('/phones.json')
        },
        {
            path:'/favorites',
            element:<Favorites></Favorites>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
          path:'/phones/:id',
          element:<Phone></Phone>,
          loader:()=>fetch('/phones.json')
        }
      ] 
    }
])

export default myCreatedRoute;