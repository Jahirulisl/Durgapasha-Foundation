

import SectionTitle from '../../../Components/SectionTitle';
import MenuItem from '../MenuItems/MenuItem';
import useMenu from '../../../hooks/useMenu';


const PopulerMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter(item => item.category === 'popular')

  // //for state set start
  // const [menu, setMenu] = useState([]);
  // //for state set end
  // useEffect(() => {
  //   fetch('menu.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       const popularItems = data.filter(item =>item.category === 'popular');
  //       setMenu(popularItems)
  //     })
  // }, [])

  return (
    <section className='mb-12'>
     <SectionTitle
        subHeading={"your program"}
        heading={"calender menu"}>

     </SectionTitle>
      <div className='grid md:grid-cols-2 gap-10'>
        {popular.map((item) => (
         <MenuItem
         key={item._id} item={item} >
         </MenuItem>
        ))}
      </div>
    </section>

  );
};

export default PopulerMenu;