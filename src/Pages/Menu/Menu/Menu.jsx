// for helmet start
import { Helmet} from 'react-helmet-async';
import Cover from '../../Sahared/Cover/Cover';
//for cover img start
import coverImg from '../../../assets/menu/clenderimg.jpg'
import PopulerMenu from '../../Sahared/PopulerMenu/PopulerMenu';
const Menu = () => {
  return (
    <div>
      <Helmet>
        <title> Eduction | Munu</title>
      </Helmet>
      <Cover img ={coverImg} title="Our Munu"></Cover>
      <PopulerMenu></PopulerMenu>
    </div>
  );
};

export default Menu;