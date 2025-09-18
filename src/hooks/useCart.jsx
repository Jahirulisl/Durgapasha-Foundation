
 import { useQuery } from "@tanstack/react-query";
import useAxiosSecur from "./useAxiosSecure";



const useCart = () => {

  const axiosSecure = useAxiosSecur();
  //amra axios dia loade na kora tanstack Query
  const {data:cart = [],refetch} = useQuery({
    queryKey: ['cart'],
    queryFn: async()=>{
      const res = await axiosSecure.get('/carts')
      return res. data;
    },
  });
  return [ cart,refetch];
};

export default useCart;
