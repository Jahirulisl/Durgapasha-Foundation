import PopulerMenu from "../../Sahared/PopulerMenu/PopulerMenu";
import Templet from "../../Tamplet/Templet";
import Banner from "../Banner/Banner";
import Catagory from "../Category/Category";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";



const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Catagory></Catagory>
      <Templet></Templet>
      <PopulerMenu></PopulerMenu>
      <Featured></Featured>
      <Testimonials></Testimonials>

      
    
      
    </div>
  );
};

export default Home;
