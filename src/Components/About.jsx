/* eslint-disable react/no-unescaped-entities */
const About = () => {
  return (
    <>
      <div className="about w-full mt-16 flex h-[45vh] px-5 bg-neutral">
        <div className="left w-9/12 pr-40 pt-7">
          <h1 className="abouttxt uppercase text-5xl text-primary">
            Celebrating India's rich heritage through timeless fashion.
          </h1>
        </div>
        <div className="right w-[40%] pl-7 flex flex-col justify-around">
          <p className="pr-24 text-accent-light">
            At Tabeer, we blend traditional craftsmanship with contemporary designs
            to create ethnic wear that honors our cultural roots while embracing modern aesthetics.
          </p>
          <p className="pr-[7.4rem] text-accent-light">
            Each piece in our collection tells a story of India's diverse textile heritage,
            handcrafted by skilled artisans using techniques passed down through generations.
          </p>
          <h5 className="uppercase font-mono text-[12px] mr-[19rem] pb-2 border-b-[1px] border-primary text-primary">
            Discover Our Heritage
          </h5>
        </div>
      </div>
    </>
  );
};

export default About;
