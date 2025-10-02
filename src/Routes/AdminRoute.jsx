import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";


const AdminRoute = (children) => {

// for user check start
  const [user, loading] = useAuth();
// for user check end

  const [isAdmin, isAdminLoading] = useAdmin();

 //for location start>
  const location = useLocation();

  //abr user thakla amra children ta patabo na hola navigate koran onno>
  if(loading || isAdminLoading){
    return <progress className="progress w-56"></progress>
  }

  if (user && isAdmin){
    return children;
  }
  return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default AdminRoute;
