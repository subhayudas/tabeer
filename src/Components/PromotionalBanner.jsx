import { useState, useEffect, useRef } from 'react';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const promotions = [
  {
    id: 1,
    title: "Monsoon Sale",
    subtitle: "Up to 40% off on selected items",
    bgColor: "bg-primary/10",
    textColor: "text-primary",
    buttonColor: "bg-primary",
    buttonTextColor: "text-neutral",
    buttonText: "Shop Now",
    endDate: "June 30, 2024"
  },
  {
    id: 2,
    title: "New Arrivals",
    subtitle: "Discover our latest collection",
    bgColor: "bg-secondary/10",
    textColor: "text-primary",
    buttonColor: "bg-secondary",
    buttonTextColor: "text-primary",
    buttonText: "Explore",
    endDate: ""
  },
  {
    id: 3,
    title: "Wedding Season",
    subtitle: "Exclusive bridal collection",
    bgColor: "bg-accent/10",
    textColor: "text-accent",
    buttonColor: "bg-accent",
    buttonTextColor: "text-neutral",
    buttonText: "View Collection",
    endDate: "July 15, 2024"
  }
];

const PromotionalBanner = () => {
  const [currentPromo, setCurrentPromo] = useState(0);
  const bannerRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  
  // Auto-rotate promotions
  useEffect(() => {
    const interval = setInterval(() => {
      nextPromo();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentPromo]);
  
  const nextPromo = () => {
    setCurrentPromo((prev) => (prev + 1) % promotions.length);
  };
  
  const prevPromo = () => {
    setCurrentPromo((prev) => (prev - 1 + promotions.length) % promotions.length);
  };
  
  useGSAP(() => {
    // Animation for banner content changes
    if (bannerRef.current && textRef.current && buttonRef.current) {
      gsap.fromTo(
        textRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      );
      
      gsap.fromTo(
        buttonRef.current,
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, delay: 0.2, ease: "power2.out" }
      );
    }
  }, [currentPromo]); // Re-run when currentPromo changes
  
  const promo = promotions[currentPromo];
  
  return (
    <div 
      ref={bannerRef}
      className={`w-full ${promo.bgColor} transition-colors duration-500 py-3 relative overflow-hidden`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <button 
          onClick={prevPromo}
          className="text-primary hover:text-primary-light transition-colors p-1 focus:outline-none"
          aria-label="Previous promotion"
        >
          <FiArrowLeft className="text-lg" />
        </button>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 py-1" ref={textRef}>
          <h3 className={`font-bold ${promo.textColor} text-sm md:text-base`}>{promo.title}</h3>
          <p className={`${promo.textColor} text-xs md:text-sm`}>{promo.subtitle}</p>
          {promo.endDate && (
            <span className="text-xs text-accent-light">Ends: {promo.endDate}</span>
          )}
        </div>
        
        <div className="flex items-center gap-4" ref={buttonRef}>
          <button 
            className={`${promo.buttonColor} ${promo.buttonTextColor} text-xs md:text-sm px-4 py-1.5 rounded-full hover:opacity-90 transition-opacity`}
          >
            {promo.buttonText}
          </button>
          <button 
            onClick={nextPromo}
            className="text-primary hover:text-primary-light transition-colors p-1 focus:outline-none"
            aria-label="Next promotion"
          >
            <FiArrowRight className="text-lg" />
          </button>
        </div>
      </div>
      
      {/* Animated progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-neutral-dark">
        <div 
          className="h-full bg-primary"
          style={{
            width: `${((currentPromo + 1) / promotions.length) * 100}%`,
            transition: 'width 0.3s ease-out'
          }}
        />
      </div>
    </div>
  );
};

export default PromotionalBanner;
