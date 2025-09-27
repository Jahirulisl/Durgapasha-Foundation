 import axios from "axios";

const axiospublic = axios.create({
  baseURL: 'http://localhost:3000',
})
const useAxiosPublic = () => {
    return axiospublic;
};

export default useAxiosPublic;
