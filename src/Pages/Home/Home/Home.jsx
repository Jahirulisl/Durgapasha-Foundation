import PopulerMenu from "../../Sahared/PopulerMenu/PopulerMenu";
import Templet from "../../Tamplet/Templet";
import Banner from "../Banner/Banner";
import Catagory from "../Category/Category";



const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Catagory></Catagory>
      <Templet></Templet>
      <PopulerMenu></PopulerMenu>
      
    </div>
  );
};

export default Home;
