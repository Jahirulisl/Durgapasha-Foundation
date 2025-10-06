 
 import {createBrowserRouter} from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import Menu from "../Pages/Menu/Menu/Menu";
import OrderGift from "../Pages/Order/Order/OrderGift";
import Login from "../Pages/login/Login";
import SignUp from "../Pages/SIgnUp/SignUp";
import PrivateRoute from "./Privates/PrivateRoute";
import Secrte from "../Pages/Sahared/Secret/Secrte";
import Deshboard from "../Layout/Deshboard";
import Cart from "../Pages/Deshboard/Cart/Cart";
import AllUsers from "../Pages/Deshboard/AllUsers/Allusers";
import AddItems from "../Pages/Deshboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Deshboard/ManageItems/ManageItems";

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
      {
        path:'signup',
        element: <SignUp></SignUp>,
      },
      {
        path:'secret',
        element: <PrivateRoute>
          <Secrte></Secrte>
        </PrivateRoute>
      }
    ]
  },
  {
    path:'deshboard',
    element:<PrivateRoute><Deshboard></Deshboard></PrivateRoute>,
    children:[
      //normal users routes
      {
        path:'cart',
        element:<Cart></Cart>,
      },
      //admin only routes
      {
       path:'addItems',
       element:<AdminRoute>
        <AddItems></AddItems>
       </AdminRoute>
      },
      {
        path:'manageitems',
        element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
      },
      {
        path:'allusers',
        element:<AdminRoute>
          <AllUsers></AllUsers>
        </AdminRoute>
      }
    ]

  }
]);
