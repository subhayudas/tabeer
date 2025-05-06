import { IoIosArrowForward } from "react-icons/io";

const Cards = () => {
  return (
    <>
      <div className="cards flex gap-5 px-5 mt-24 border-t-[1px] border-primary/20 w-full bg-neutral">
        <div className="card1 flex justify-center items-center rounded-xl relative w-1/3 h-[100vh] overflow-hidden mt-4">
          <div
            data-scroll
            data-scroll-speed="-.15"
            className="imgbtn absolute z-10 bg-secondary/80 px-8 py-4 rounded-full flex gap-8 items-center"
          >
            <div className="circle bg-primary w-2 h-2 rounded-full"></div>
            <h5 className="text-xs text-primary">SHOP</h5>
            <h5 className="text-xs font-bold text-primary">SAREES</h5>
            <div className="text-xs arrow text-primary">
              <IoIosArrowForward />
            </div>
          </div>
          <img
            data-scroll
            data-scroll-speed="-.1"
            className="rounded-xl h-full object-cover"
            src="https://images.pexels.com/photos/2531734/pexels-photo-2531734.jpeg"
            alt="Traditional Saree Collection"
          />
        </div>
        <div className="card2 flex justify-center items-center rounded-xl relative w-1/3 h-[100vh] overflow-hidden mt-4">
          <div
            data-scroll
            data-scroll-speed="-.15"
            className="imgbtn absolute z-10 bg-accent/80 px-8 py-4 rounded-full flex gap-8 items-center"
          >
            <div className="circle bg-primary w-2 h-2 rounded-full"></div>
            <h5 className="text-xs text-neutral">SHOP</h5>
            <h5 className="text-xs font-bold text-neutral">LEHENGAS</h5>
            <div className="text-xs arrow text-neutral">
              <IoIosArrowForward />
            </div>
          </div>
          <img
            data-scroll
            data-scroll-speed="-.1"
            className="rounded-xl h-full object-cover"
            src="https://images.pexels.com/photos/3649765/pexels-photo-3649765.jpeg"
            alt="Designer Lehenga Collection"
          />
        </div>
        <div className="card3 flex justify-center items-center rounded-xl relative w-1/3 h-[100vh] overflow-hidden mt-4">
          <div
            data-scroll
            data-scroll-speed="-.15"
            className="imgbtn absolute z-10 bg-primary/80 px-8 py-4 rounded-full flex gap-8 items-center"
          >
            <div className="circle bg-neutral w-2 h-2 rounded-full"></div>
            <h5 className="text-xs text-neutral">SHOP</h5>
            <h5 className="text-xs font-bold text-neutral">KURTIS</h5>
            <div className="text-xs arrow text-neutral">
              <IoIosArrowForward />
            </div>
          </div>
          <img
            data-scroll
            data-scroll-speed="-.1"
            className="rounded-xl h-full object-cover"
            src="https://images.pexels.com/photos/10909386/pexels-photo-10909386.jpeg"
            alt="Designer Kurti Collection"
          />
        </div>
      </div>
    </>
  );
};

export default Cards;
