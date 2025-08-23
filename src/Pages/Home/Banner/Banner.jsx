
//from crusel react osam statr
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
//from crusel react osam en

//import for banner img from assast home pictures start
import img1 from '../../../assets/home/bannerf.jpg'
import img2 from '../../../assets/home/Teacher.jpg'
import img3 from '../../../assets/home/03.png'
import img4 from '../../../assets/home/04.jpg'
import img5 from '../../../assets/home/05.png'
import img6 from '../../../assets/home/06.png'


//import for banner img from assast home pictures end

const Banner = () => {

  
  return (
      <Carousel>
      <div>
        <img src={img1} />
      </div>
       <div>
        <img src={img2}/>
      </div>
       <div>
        <img src={img3}  />
      </div>
       <div>
        <img src={img4} />
      </div>
       <div>
        <img src={img5}  />
      </div>
       <div>
        <img src={img6}  />
      </div>
    
    </Carousel>
  );
};

export default Banner;