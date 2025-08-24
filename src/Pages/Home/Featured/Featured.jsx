import SectionTitle from "../../../Components/SectionTitle";
import featuredImg from '../../../assets/home/Teacher.jpg'

import './Featured.css'

const Featured = () => {
  return (
    <div className="featured-item text-white pt-8">
      
      <SectionTitle
      subHeading={"check it out"}
      heading={"Featured item"}
      >

      </SectionTitle>
      <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg } alt="" />
        </div>
        <div className="md:ml-10 space-y-4">
          <p>Aug 20, 2009</p>
          <p className="uppercase">Jahir</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, est et perspiciatis sequi odit tempore praesentium esse alias fugit hic. Temporibus ducimus officiis eligendi perferendis quibusdam facere incidunt eius voluptatem?</p>
          <button className="btn btn-primary">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;