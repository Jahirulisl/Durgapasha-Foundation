 
 import {
  createBrowserRouter,

} from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import Menu from "../Pages/Menu/Menu/Menu";
import OrderGift from "../Pages/Order/Order/OrderGift";
import Login from "../Pages/login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"menu",
        element:<Menu></Menu>
      },
      {
        path: "ordergift",
        element: <OrderGift></OrderGift>
      },
      {
        path:'login',
        element:<Login></Login>
      },
    ]
  },
]);
