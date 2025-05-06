const Thanks = () => {
  return (
    <>
      <div className="thanks relative w-full bg-neutral py-10">
        <div className="start flex justify-between w-full border-b-[1px] border-primary/30 px-5">
          <h5 className="thanksTxt text-[.9rem] text-primary">Customer Testimonials</h5>
          <h5 className="thanksTxt text-[.9rem] text-primary">Celebrating Indian Craftsmanship</h5>
        </div>
        <h1 className="mainTxt text-[3.5rem] px-[10rem] text-center py-20 tracking-tight leading-none text-primary">
          "The Banarasi silk saree I purchased from Tabeer is absolutely exquisite.
          The craftsmanship and attention to detail are unmatched."
        </h1>
        <div className="btnDiv flex justify-center items-center">
          <h5 className="btnTxt bg-primary text-[.7rem] text-neutral px-[5rem] py-5 text-center font-semibold rounded-full">
            SHARE YOUR EXPERIENCE
          </h5>
        </div>
        <p className="txtAfterBtn text-center text-[.95rem] px-[33rem] pt-8 leading-[1.2] text-accent-light">
          Every purchase supports traditional Indian artisans and helps preserve our cultural heritage.
        </p>
      </div>
    </>
  );
};

export default Thanks;
