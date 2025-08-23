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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed natus facere tempora perferendis aspernatur quidem! Laudantium vero at tenetur repellat illo. Necessitatibus eveniet quam similique pariatur quia esse architecto nulla.
        </p>

      </div>
    </div>
   </section>
  );
};

export default Templet;