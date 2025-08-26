import { useEffect, useState } from "react";

const useMenu = () => {
  //for state set start
 const [menu,setMenu] = useState([]);
 //for loading start
 const [loading,setLoading] = useState(true);

 useEffect(()=>{
  fetch('menu.json')
  .then(res => res.json())
  .then(data =>{
    setMenu(data);
    setLoading(false);
  })
 },[])

 return [menu,loading]

} 

export default useMenu;