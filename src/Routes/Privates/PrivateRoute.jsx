import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {

  //for uesr and loading come 
  const {user,loading} =useContext(AuthContext);
  //for location
 const location = useLocation();
 if(loading){
  return <progress className="progress w-56"></progress>
 }
 if (user){
  return children;
 }
  return  <Navigate to="/login" state={{from:location}} replace></Navigate>
   
};

export default PrivateRoute;