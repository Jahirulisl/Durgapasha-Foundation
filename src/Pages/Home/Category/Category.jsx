// Import Swiper React components start
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import Swiper React components end

import slidImg1 from '../../../assets/home/Tree01.jpg';
import slidImg2 from '../../../assets/home/Tree02.jpg';
import slidImg3 from '../../../assets/home/Tree01.jpg';
import slidImg4 from '../../../assets/home/crest.jpg';
import SectionTitle from '../../../Components/SectionTitle';
// import slidImg5 from '../../../assets/home/Tree03.jpg';


const Catagory = () => {
  return (
    <section>
       <SectionTitle
        subHeading={"this is a help organization for education"}
        heading={"our tree plantation"}
       >
       </SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-8"
      >
        <SwiperSlide>
          <img src={slidImg1} alt="" />
          <h3 className='text-xl uppercase text-center text-white -mt-8 '>katakhaki school</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slidImg2} alt="" />
          <h3 className='text-xl uppercase text-center text-white -mt-8'>katakhaki school</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slidImg3} alt="" />
          <h3 className='text-xl uppercase text-center text-white -mt-8'>katakhaki school</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slidImg4} alt="" />
          <h3 className='text-xl uppercase text-center text-white -mt-8'>DGL HIG School</h3>
        </SwiperSlide>
        {/* <SwiperSlide>
         <img src={slidImg5} alt="" />
          <h3 className='text-xl uppercase text-center text-white -mt-8'>katakhaki school</h3>
      </SwiperSlide> */}
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Catagory;