/* eslint-disable no-unused-vars */
import { useEffect, useRef } from "react";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import PromotionalBanner from "./Components/PromotionalBanner";
import Cards from "./Components/Cards";
import About from "./Components/About";
import CategoryHighlights from "./Components/CategoryHighlights";
import Bestsellers from "./Components/Bestsellers";
import NewArrivals from "./Components/NewArrivals";
import ShopTheLook from "./Components/ShopTheLook";
import Products from "./Components/Products";
import Thanks from "./Components/Thanks";
import OurImpact from "./Components/OurImpact";
import Footer from "./Components/Footer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const App = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  const locomotiveScroll = new LocomotiveScroll();
  const cursorRef = useRef(null);

  // Custom cursor effect
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out"
      });
    };

    const onMouseEnter = () => {
      gsap.to(cursor, {
        scale: 1,
        opacity: 1,
        duration: 0.3
      });
    };

    const onMouseLeave = () => {
      gsap.to(cursor, {
        scale: 0,
        opacity: 0,
        duration: 0.3
      });
    };

    // Add interactive elements cursor effect
    const handleInteractiveElements = () => {
      const interactiveElements = document.querySelectorAll('a, button, .interactive');

      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
          gsap.to(cursor, {
            scale: 1.5,
            backgroundColor: 'rgba(139, 0, 0, 0.2)',
            mixBlendMode: 'difference',
            duration: 0.3
          });
        });

        el.addEventListener('mouseleave', () => {
          gsap.to(cursor, {
            scale: 1,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            mixBlendMode: 'normal',
            duration: 0.3
          });
        });
      });
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);

    // Initialize after a short delay to ensure all elements are loaded
    setTimeout(handleInteractiveElements, 1000);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  useGSAP(() => {
    // NavBar Animations
    let navBar = document.querySelector(".nav");
    gsap.to(navBar, {
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    });

    // Landing Page Animation

    let videoCrsrAnimation = () => {
      let crsr = document.querySelector(".crsr");
      let vdo = document.querySelector(".video");
      let videoBackground = document.querySelector(".video-background");

      if (!crsr || !vdo) return; // Safety check

      // Mousemove event for the video container
      vdo.addEventListener("mousemove", (details) => {
        // Update cursor position using GSAP
        gsap.to(crsr, {
          x: details.clientX,
          y: details.clientY,
          ease: "power2.out"
        });
      });

      // Mouseenter event to change cursor when entering the video container
      vdo.addEventListener("mouseenter", () => {
        crsr.innerHTML = "PLAY";
        crsr.style.backgroundColor = "black";
        crsr.style.color = "white";
        gsap.to(crsr, {
          scale: 4,
          opacity: 1,
          ease: "power2.out"
        });
      });

      // Mouseleave event to reset cursor when leaving the video container
      vdo.addEventListener("mouseleave", () => {
        crsr.innerHTML = "";
        crsr.style.backgroundColor = "black";
        gsap.to(crsr, {
          scale: 0.0000001,
          opacity: 0,
          ease: "power2.out"
        });
      });
    };

    videoCrsrAnimation();

    let textAnimationFun = () => {
      let text = document.querySelectorAll(".txt");
      gsap.from(text, {
        y: 800,
        color: "white",
        opacity: 0,
        delay: 0.5,
        duration: 0.9,
        ease: "expo.out",
      });
      let textBox = document.querySelectorAll(".innerTxt");
      gsap.from(textBox, {
        y: 500,
        color: "white",
        opacity: 0,
        delay: 0.9,
        duration: 0.6,
        ease: "expo",
        stagger: 0.15,
      });
    };

    textAnimationFun();

    // Products Animation

    let cursor = document.querySelector(".cursor");
    let productsDiv = document.querySelector(".products");
    let leftDiv = document.querySelector(".products .left");
    let rightDiv = document.querySelector(".products .right");
    productsDiv.addEventListener("mousemove", (dets) => {
      gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        scale: 1,
        // duration: .8,
      });
    });
    productsDiv.addEventListener("mouseleave", () => {
      gsap.to(cursor, {
        scale: 0,
      });
    });
    leftDiv.addEventListener("mouseenter", () => {
      cursor.style.backgroundColor = "#bababa2e";
      gsap.to(cursor, {
        duration: 1,
      });
    });
    rightDiv.addEventListener("mouseenter", () => {
      cursor.style.backgroundColor = "#23262e25";
      gsap.to(cursor, {
        duration: 1,
      });
    });
  });

  return (
    <>
      {/* Custom cursor */}
      <div
        ref={cursorRef}
        className="fixed w-6 h-6 rounded-full pointer-events-none z-[9999] mix-blend-difference bg-white/20 backdrop-blur-sm border border-white/30"
        style={{
          top: -15,
          left: -15,
          transform: 'scale(0)',
          opacity: 0
        }}
      ></div>

      <div className="main relative w-full bg-neutral overflow-x-hidden">
        <Navbar />
        <LandingPage />
        <PromotionalBanner />
        <Cards />
        <About />
        <CategoryHighlights />
        <Bestsellers />
        <NewArrivals />
        <ShopTheLook />
        <Products />
        <Thanks />
        <OurImpact /> {/*  and Input Tag  */}
        <Footer />

        {/* Back to top button with animation */}
        <button
          onClick={() => gsap.to(window, {duration: 1.5, scrollTo: 0, ease: "power3.inOut"})}
          className="fixed bottom-8 right-8 bg-primary text-neutral w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-50 hover:bg-primary-light transition-colors duration-300 animate-float"
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default App;
