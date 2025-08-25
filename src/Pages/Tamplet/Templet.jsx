// import bgImg2 from "../../assets/home/chef-service.jpg"
import SectionTitle from "../../Components/SectionTitle";
import  slidImg4 from "../../assets/home/crest.jpg"

const Templet = () => {
  return (

   <section>
    <SectionTitle
     subHeading={"our templet"}
      heading={"This is a templet page"}
    >

    </SectionTitle>
     <div className=" flex justify-center h-screen items-center mb-24"
      style={{ backgroundImage: `url(${slidImg4})` }}

    >

      <div className="bg-base-300 w-4/6 p-8 m-4 ">
        <h2 className=" text-3xl text-center uppercase">Bistro boss</h2>
        <p>
        যে শিক্ষককে সম্মান করে, সে কখনো জীবনে হার মানে না,শিক্ষাই ভবিষ্যতের দরজা খোলে, আর চাবিটি আছে তোমার হাতে
        </p>

      </div>
    </div>
   </section>
  );
};

export default Templet;