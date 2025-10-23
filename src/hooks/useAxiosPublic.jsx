 import axios from "axios";

const axiospublic = axios.create({
  baseURL: 'https://education-foundation-server.vercel.app',
})
const useAxiosPublic = () => {
    return axiospublic;
};

export default useAxiosPublic;
