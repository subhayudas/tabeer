import { IoIosArrowForward } from "react-icons/io";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Cards = () => {
  const [activeCard, setActiveCard] = useState(null);
  const cardsRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const btnRefs = useRef([]);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Main cards section animation
    gsap.from(cardsRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    // Staggered animation for cards
    gsap.from([card1Ref.current, card2Ref.current, card3Ref.current], {
      scale: 0.8,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top 70%",
        toggleActions: "play none none none"
      }
    });

    // Button animations
    gsap.from(btnRefs.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.3,
      delay: 0.5,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top 60%",
        toggleActions: "play none none none"
      }
    });

    // Set up hover animations
    const cards = [card1Ref.current, card2Ref.current, card3Ref.current];
    cards.forEach((card, index) => {
      card.addEventListener("mouseenter", () => {
        setActiveCard(index);

        // Scale up the active card
        gsap.to(card, {
          scale: 1.03,
          zIndex: 10,
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          duration: 0.3,
          ease: "power2.out"
        });

        // Scale down other cards
        cards.forEach((otherCard, otherIndex) => {
          if (otherIndex !== index) {
            gsap.to(otherCard, {
              scale: 0.97,
              opacity: 0.8,
              duration: 0.3,
              ease: "power2.out"
            });
          }
        });

        // Animate the button
        gsap.to(btnRefs.current[index], {
          scale: 1.1,
          duration: 0.3,
          ease: "back.out(1.7)"
        });
      });

      card.addEventListener("mouseleave", () => {
        setActiveCard(null);

        // Reset all cards
        cards.forEach((card) => {
          gsap.to(card, {
            scale: 1,
            zIndex: 1,
            opacity: 1,
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            duration: 0.3,
            ease: "power2.out"
          });
        });

        // Reset the button
        gsap.to(btnRefs.current[index], {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });
  }, []);

  return (
    <>
      <div
        ref={cardsRef}
        className="cards flex gap-5 px-5 mt-24 border-t-[1px] border-primary/20 w-full bg-neutral"
      >
        <div
          ref={card1Ref}
          className="card1 flex justify-center items-center rounded-xl relative w-1/3 h-[100vh] overflow-hidden mt-4 transition-all duration-500 shadow-lg"
        >
          <div
            ref={el => btnRefs.current[0] = el}
            className="imgbtn absolute z-10 bg-secondary/80 px-8 py-4 rounded-full flex gap-8 items-center cursor-pointer hover:bg-secondary transition-all duration-300 group"
          >
            <div className="circle bg-primary w-2 h-2 rounded-full group-hover:animate-pulse"></div>
            <h5 className="text-xs text-primary">SHOP</h5>
            <h5 className="text-xs font-bold text-primary">SAREES</h5>
            <div className="text-xs arrow text-primary transform group-hover:translate-x-1 transition-transform duration-300">
              <IoIosArrowForward />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <img
            className="rounded-xl h-full w-full object-cover transition-transform duration-700 hover:scale-110"
            src="/images/saree.webp"
            alt="Traditional Saree Collection"
          />
        </div>
        <div
          ref={card2Ref}
          className="card2 flex justify-center items-center rounded-xl relative w-1/3 h-[100vh] overflow-hidden mt-4 transition-all duration-500 shadow-lg"
        >
          <div
            ref={el => btnRefs.current[1] = el}
            className="imgbtn absolute z-10 bg-accent/80 px-8 py-4 rounded-full flex gap-8 items-center cursor-pointer hover:bg-accent transition-all duration-300 group"
          >
            <div className="circle bg-primary w-2 h-2 rounded-full group-hover:animate-pulse"></div>
            <h5 className="text-xs text-neutral">SHOP</h5>
            <h5 className="text-xs font-bold text-neutral">LEHENGAS</h5>
            <div className="text-xs arrow text-neutral transform group-hover:translate-x-1 transition-transform duration-300">
              <IoIosArrowForward />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <img
            className="rounded-xl h-full w-full object-cover transition-transform duration-700 hover:scale-110"
            src="/images/dress2.webp"
            alt="Designer Lehenga Collection"
          />
        </div>
        <div
          ref={card3Ref}
          className="card3 flex justify-center items-center rounded-xl relative w-1/3 h-[100vh] overflow-hidden mt-4 transition-all duration-500 shadow-lg"
        >
          <div
            ref={el => btnRefs.current[2] = el}
            className="imgbtn absolute z-10 bg-primary/80 px-8 py-4 rounded-full flex gap-8 items-center cursor-pointer hover:bg-primary transition-all duration-300 group"
          >
            <div className="circle bg-neutral w-2 h-2 rounded-full group-hover:animate-pulse"></div>
            <h5 className="text-xs text-neutral">SHOP</h5>
            <h5 className="text-xs font-bold text-neutral">KURTIS</h5>
            <div className="text-xs arrow text-neutral transform group-hover:translate-x-1 transition-transform duration-300">
              <IoIosArrowForward />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <img
            className="rounded-xl h-full w-full object-cover transition-transform duration-700 hover:scale-110"
            src="/images/dress.webp"
            alt="Designer Kurti Collection"
          />
        </div>
      </div>
    </>
  );
};

export default Cards;
