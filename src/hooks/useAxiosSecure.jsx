
import axios from "axios"; 

export const axiosSecure = axios.create({
  baseURL: 'http://localhost:3000'
})
const useAxiosSecur = () => {
  
  return axiosSecure;
};

export default useAxiosSecur;
