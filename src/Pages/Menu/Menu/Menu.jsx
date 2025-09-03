// for helmet start
import { Helmet } from 'react-helmet-async';
import Cover from '../../Sahared/Cover/Cover';

import dessertImg from "../../../assets/menu/bag.jpg";
import crestImg from "../../../assets/home/crest.jpg";
import sonodImg from "../../../assets/menu/sonod.jpg";

//for cover img start
import coverImg from '../../../assets/menu/clenderimg.jpg'
import useMenu from '../../../hooks/useMenu';

import SectionTitle from '../../../Components/SectionTitle';
import MunuCategory from './MunuCategory/MunuCategory';

const Menu = () => {
  //import use hooks start
  const [menu] = useMenu();

  //import from menu.json start all category
  const dessert = menu.filter(item => item.category === 'dessert');
  const salad = menu.filter(item => item.category === 'salad');
  const offered = menu.filter(item => item.category === 'offered');
  const drinks = menu.filter(item => item.category === 'drinks');
  const soup = menu.filter(item => item.category === 'soup');
  //import from menu.json end all category
  return (
    <div>
      <Helmet>
        <title> Eduction | Munu</title>
      </Helmet>
      <Cover img={coverImg} title="জ্ঞানের জন্য পুরস্কার"></Cover>

      <SectionTitle
        subHeading="মিস করবেন না" heading="জিপিএ-৫ অর্জন সম্মাননা"
      >
      </SectionTitle>

      <MunuCategory items={dessert} title="ব্যাগ" img={dessertImg}></MunuCategory>
      <MunuCategory items={dessert} title="প্রতীকচিহ্ন" img={crestImg}></MunuCategory>
      <MunuCategory items={dessert} title="সনদপত্র" img={sonodImg}></MunuCategory>

    </div>
  );
};

export default Menu;