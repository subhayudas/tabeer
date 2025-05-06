const LandingPage = () => {
  return (
    <>
      <div className="landingPage w-full bg-neutral pt-24 md:pt-28 relative overflow-hidden">
        {/* Full-screen video background */}
        <video
          className="video-background"
          src="/Youtube_Video.mp4"
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          disableRemotePlayback
        />

        <div className="container mx-auto relative z-10">
          <div className="text text-[10vw] md:text-[12vw] overflow-hidden flex flex-col uppercase leading-[.9] tracking-tighter pt-20 md:pt-32 px-4 md:px-5 text-primary">
            <h1 className="txt overflow-hidden">Elegance</h1>
            <div className="relative z-20 bg-neutral/70 backdrop-blur-sm overflow-hidden flex justify-between">
              <h1 className="innerTxt overflow-hidden">in</h1>
              <h1 className="innerTxt overflow-hidden">Tradition</h1>
            </div>
          </div>
          <div className="video relative w-full px-4 md:px-8 mt-5 overflow-hidden">
            <div className="crsr absolute h-1 w-1 rounded-full text-[.3vw] flex justify-center items-center font-medium opacity-0"></div>
            <div className="absolute bottom-6 md:bottom-12 left-8 md:left-16 bg-primary text-neutral px-4 md:px-6 py-2 md:py-3 rounded-full hover:bg-primary-light transition-colors duration-300 cursor-pointer">
              <p className="text-xs md:text-sm tracking-wider">EXPLORE NEW COLLECTION</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
