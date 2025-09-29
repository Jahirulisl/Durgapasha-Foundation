
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

 const axiosSecure = axios.create({
  baseURL: 'http://localhost:3000'
})
const useAxiosSecur = () => {
  //for navigate
  const navigate = useNavigate();
  //for distructure logout 
  const {logOut}= useAuth();

  // start jwt token 68.8 class request interceptor to add authorization for every decure call to the api
  axiosSecure.interceptors.request.use(function (config) {
    const token = localStorage.getItem('access-token')
    //console.log('request stopped by interceptors', token)
    config.headers.authorization = `Bearer ${token}`;
    return config;
  }, function (error) {
    // Do something with the request error
    return Promise.reject(error);
  });

  //interceptors 401 and 403 status start
  axiosSecure.interceptors.response.use(function (response) {
    return response;
  }, async (error) => {
    const status = error.response.status;
    //console.log('status error in the interceptor', status);

    //for 401 or 403, log out the user and move the user to the login page
    if (status === 401 || status === 403) {
      await logOut();
      navigate('/login')
    }
    return Promise.reject(error);
  })

  //interceptors 401 and 403 status end
  return axiosSecure;
};

export default useAxiosSecur;
