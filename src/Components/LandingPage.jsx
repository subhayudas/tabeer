const LandingPage = () => {
  return (
    <>
      <div className="landingPage w-full bg-neutral pt-24 md:pt-28 relative overflow-hidden">
        {/* Full-screen video background */}
        <video
          className="video-background"
          src="/video.mp4"
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          disableRemotePlayback
        />

        <div className="container mx-auto relative z-10 h-[calc(100vh-6rem)]">
          {/* Main heading with staggered text elements */}
          <div className="flex flex-col h-full justify-center pt-0 px-4 md:px-8 text-primary">
            {/* Decorative element */}
            <div className="w-16 h-1 bg-secondary mb-4 animate-slideRight"></div>

            {/* Elegance text */}
            <h1 className="text-[13vw] md:text-[15vw] font-bold uppercase tracking-tighter leading-[0.8] animate-slideDown text-shadow-lg">
              Elegance
            </h1>

            {/* "in" text positioned to the right with decorative elements */}
            <div className="w-full flex justify-end -mt-4 md:-mt-8 relative">
              <div className="absolute left-[30%] top-1/2 w-[15%] h-[2px] bg-secondary animate-slideLeft delay-100"></div>
              <h2 className="text-[8vw] md:text-[10vw] uppercase italic tracking-tight animate-slideLeft delay-200 text-shadow-md">
                in
              </h2>
              <div className="absolute right-[30%] top-1/2 w-[15%] h-[2px] bg-secondary animate-slideRight delay-100"></div>
            </div>

            {/* Tradition text with animation */}
            <h1 className="text-[15vw] md:text-[17vw] font-bold uppercase tracking-tighter leading-[0.8] animate-slideRight delay-300 text-shadow-lg">
              Tradition
            </h1>

            {/* Tagline with different font and style */}
            <div className="mt-6 md:mt-8 animate-fadeIn delay-500">
              <p className="font-['Poppins'] text-lg md:text-xl lg:text-2xl text-accent ml-2 md:ml-4 text-shadow-sm tracking-wide">
                Timeless ethnic wear for the modern Indian woman
              </p>
              <div className="w-24 h-1 bg-secondary mt-4 ml-2 md:ml-4 animate-slideRight delay-700"></div>
            </div>
          </div>

          {/* Button positioned at bottom right with enhanced styling */}
          <div className="absolute bottom-12 md:bottom-16 right-8 md:right-16 animate-float">
            <button className="bg-primary text-neutral px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-primary-light transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:scale-105 group flex items-center">
              <span className="text-sm md:text-base tracking-wider font-medium group-hover:animate-pulse">EXPLORE NEW COLLECTION</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
