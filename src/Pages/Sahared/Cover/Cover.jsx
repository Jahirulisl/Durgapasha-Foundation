import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
  return (

    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div
        className="hero h-[800px]"
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5">
              বহুমান্য রেজাল্টকারীদের সম্মাননা ও পুরস্কার প্রদান করা হবে।
              উৎকৃষ্ট ফলাফলকারীদের প্রণোদনা ও স্কলারশিপ—আদর্শ ভবিষ্যতের জন্য।
            </p>
            <button className="btn btn-primary">পুরস্কার তালিকা</button>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;