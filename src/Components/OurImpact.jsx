/* eslint-disable react/no-unescaped-entities */
const OurImpact = () => {
  return (
    <>
      <div className="ourimpact w-full pt-60 pb-24 flex gap-5 px-5 bg-neutral">
        <div className="left w-1/3 flex flex-col gap-5 pr-20">
          <h1 className="impacttxt text-2xl text-primary">OUR HERITAGE</h1>
          <p className="impactPara text-[.95rem] text-accent-light">
            Preserving India's rich textile traditions.
          </p>
          <p className="impactPara text-[.95rem] pr-4 text-accent-light">
            At Tabeer, we work directly with skilled artisans across India to create
            authentic ethnic wear that celebrates our cultural heritage.
          </p>
          <p className="impactPara text-[.95rem] pr-8 text-accent-light">
            Each garment in our collection is crafted using traditional techniques
            like hand embroidery, block printing, and handloom weaving. By supporting
            these age-old crafts, we're helping to preserve skills that have been
            passed down through generations of Indian artisans.
          </p>
          <h5 className="uppercase font-mono text-xs border-b-[1px] border-primary mr-[12.8rem] text-primary">
            Our Artisan Partners
          </h5>
        </div>
        <div className="right w-8/12 flex gap-5 pr-5">
          <div className="imgDiv w-1/2 h-[88vh] overflow-hidden rounded-xl">
            <img
              data-scroll
              data-scroll-speed="-.2"
              className="h-[90vh] w-full rounded-xl object-cover"
              src="https://images.pexels.com/photos/12809964/pexels-photo-12809964.jpeg"
              alt="Indian artisan weaving traditional fabric"
            />
          </div>
          <div className="imgDiv w-1/2 h-[88vh] overflow-hidden rounded-xl">
            <img
              data-scroll
              data-scroll-speed="-.2"
              className="h-[90vh] w-full rounded-xl object-cover"
              src="https://images.pexels.com/photos/6192554/pexels-photo-6192554.jpeg"
              alt="Traditional Indian embroidery work"
            />
          </div>
        </div>
      </div>
      <div className="input w-full px-5 bg-neutral pb-10">
        <input
          className="inputTxt w-full pr-14 bg-neutral placeholder:text-primary/70 placeholder:focus-visible:text-transparent uppercase outline-none py-3 text-4xl text-primary border-b-[2px] border-primary/30"
          type="email"
          name="emailInput"
          placeholder="SUBSCRIBE TO OUR NEWSLETTER"
        />
      </div>
    </>
  );
};

export default OurImpact;
