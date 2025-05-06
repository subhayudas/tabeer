const Products = () => {
  return (
    <>
      <div className="products relative flex w-full h-screen overflow-hidden bg-neutral">
        <div className="cursor absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0"></div>
        <div className="left w-1/2 h-full">
          <div className="relative z-20 w-full h-full flex flex-col justify-center items-center">
            <div className="h-[68%] w-[80%] overflow-hidden rounded-lg">
              <img
                className="h-full w-full object-cover"
                src="/images/saree3.webp"
                alt="Handcrafted Banarasi Silk Saree"
              />
            </div>
            <div className="ProductTxt flex flex-col items-center pt-10">
              <h5 className="text-[.9rem] text-primary font-medium">
                HANDCRAFTED BANARASI SILK SAREE - MAROON & GOLD
              </h5>
              <h6 className="text-[.75rem] text-accent-light mt-1">₹12,999</h6>
            </div>
          </div>
        </div>
        <div className="right w-1/2 h-full flex flex-col justify-center items-center">
          <div className="relative z-20 w-full h-full flex flex-col justify-center items-center">
            <div className="h-[68%] w-[80%] overflow-hidden rounded-lg">
              <img
                className="h-full w-full object-cover"
                src="/images/dress4.webp"
                alt="Designer Bridal Lehenga"
              />
            </div>
            <div className="ProductTxt flex flex-col items-center pt-10">
              <h5 className="text-[.9rem] text-primary font-medium">DESIGNER BRIDAL LEHENGA - ROYAL COLLECTION</h5>
              <h6 className="text-[.75rem] text-accent-light mt-1">₹45,999</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
