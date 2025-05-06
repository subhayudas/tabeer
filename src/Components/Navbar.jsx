import { FiShoppingCart, FiUser, FiHeart, FiSearch } from "react-icons/fi";
import { TbMenu } from "react-icons/tb";
import { useState, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navRef = useRef(null);
  const linksRef = useRef([]);
  const iconsRef = useRef([]);
  const mobileMenuRef = useRef(null);
  const searchInputRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Animation for navbar elements
  useGSAP(() => {
    // Initial animation for navbar
    gsap.to(navRef.current, {
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    });

    // Staggered animation for nav links
    gsap.from(linksRef.current, {
      y: -20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
      delay: 0.3
    });

    // Staggered animation for icons
    gsap.from(iconsRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "back.out(1.7)",
      delay: 0.6
    });
  }, []);

  // Animation for mobile menu
  useEffect(() => {
    if (!mobileMenuRef.current) return;

    if (mobileMenuOpen) {
      gsap.fromTo(mobileMenuRef.current,
        { height: 0, opacity: 0 },
        {
          height: "auto",
          opacity: 1,
          duration: 0.3,
          ease: "power2.out"
        }
      );

      // Animate menu items
      const menuItems = mobileMenuRef.current.querySelectorAll('a, div');
      gsap.fromTo(menuItems,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.05,
          delay: 0.1,
          ease: "power2.out"
        }
      );
    }
  }, [mobileMenuOpen]);

  // Handle search input animation
  useEffect(() => {
    if (!searchInputRef.current) return;

    if (searchOpen) {
      gsap.fromTo(searchInputRef.current,
        { width: 0, opacity: 0 },
        { width: "200px", opacity: 1, duration: 0.3, ease: "power2.out" }
      );
      searchInputRef.current.focus();
    } else {
      gsap.to(searchInputRef.current, { width: 0, opacity: 0, duration: 0.3, ease: "power2.in" });
    }
  }, [searchOpen]);

  return (
    <>
      <div
        ref={navRef}
        className={`nav fixed z-[999] w-full transition-all duration-300 ease-in-out opacity-0 glass ${
          scrolled ? 'py-3 shadow-md' : 'py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo with animation */}
            <div className="flex-shrink-0 overflow-hidden">
              <div className="logos relative">
                <div className="text-primary font-bold">
                  <h1 className="text-2xl md:text-3xl font-['Rozha_One'] tracking-wider animate-slideDown">TABEER</h1>
                  <p className="text-[10px] md:text-xs tracking-widest text-accent animate-slideUp delay-300">INDIAN ETHNIC WEAR</p>
                </div>
              </div>
            </div>

            {/* Desktop Navigation with animations */}
            <div className="hidden md:flex items-center">
              <div className="links uppercase flex gap-4 lg:gap-8 text-[.7rem] text-primary font-medium">
                <a
                  href="#"
                  ref={el => linksRef.current[0] = el}
                  className="hover:text-accent transition-all duration-300 hover:scale-110 relative group"
                >
                  Sarees
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </a>
                <a
                  href="#"
                  ref={el => linksRef.current[1] = el}
                  className="hover:text-accent transition-all duration-300 hover:scale-110 relative group"
                >
                  Lehengas
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </a>
                <a
                  href="#"
                  ref={el => linksRef.current[2] = el}
                  className="hover:text-accent transition-all duration-300 hover:scale-110 relative group"
                >
                  Kurtis
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </a>
                <a
                  href="#"
                  ref={el => linksRef.current[3] = el}
                  className="hover:text-accent transition-all duration-300 hover:scale-110 relative group"
                >
                  Accessories
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </a>
                <a
                  href="#"
                  ref={el => linksRef.current[4] = el}
                  className="hover:text-accent transition-all duration-300 hover:scale-110 relative group"
                >
                  Collections
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </a>
              </div>
            </div>

            {/* Icons with animations */}
            <div className="flex items-center gap-3 md:gap-5">
              {/* Search bar */}
              <div className="hidden md:flex items-center relative">
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search..."
                  className="bg-neutral-dark/50 text-primary text-sm rounded-full pl-4 pr-10 py-1.5 focus:outline-none focus:ring-1 focus:ring-primary w-0 opacity-0"
                />
                <button
                  ref={el => iconsRef.current[0] = el}
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="absolute right-2 text-primary hover:text-accent transition-colors duration-300 p-1"
                >
                  <FiSearch className="text-[17px]" />
                </button>
              </div>

              <div className="hidden md:flex items-center gap-4 bg-primary/10 rounded-full px-4 py-2">
                <button
                  ref={el => iconsRef.current[1] = el}
                  className="interactive relative group"
                >
                  <FiUser className="text-[17px] text-primary group-hover:text-accent cursor-pointer transition-colors duration-300" />
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                </button>
                <button
                  ref={el => iconsRef.current[2] = el}
                  className="interactive relative group"
                >
                  <FiHeart className="text-[17px] text-primary group-hover:text-accent cursor-pointer transition-colors duration-300 group-hover:animate-heartbeat" />
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                </button>
                <button
                  ref={el => iconsRef.current[3] = el}
                  className="interactive relative group"
                >
                  <FiShoppingCart className="text-[17px] text-primary group-hover:text-accent cursor-pointer transition-colors duration-300" />
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                </button>
              </div>

              {/* Mobile menu button with animation */}
              <button
                ref={el => iconsRef.current[4] = el}
                className="text-primary p-1 rounded-md focus:outline-none interactive hover:bg-primary/10 transition-colors duration-300"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                <TbMenu className={`text-[24px] transition-transform duration-300 ${mobileMenuOpen ? 'rotate-90' : ''}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu with animation */}
        <div
          ref={mobileMenuRef}
          className={`md:hidden absolute top-full left-0 w-full glass-dark py-0 px-4 shadow-lg overflow-hidden ${!mobileMenuOpen ? 'h-0' : ''}`}
          style={{ opacity: mobileMenuOpen ? 1 : 0, height: 0 }}
        >
          <div className="flex flex-col space-y-3 py-4">
            <a href="#" className="text-primary hover:text-accent py-2 px-3 rounded-md transition-all duration-300 hover:bg-primary/5">Sarees</a>
            <a href="#" className="text-primary hover:text-accent py-2 px-3 rounded-md transition-all duration-300 hover:bg-primary/5">Lehengas</a>
            <a href="#" className="text-primary hover:text-accent py-2 px-3 rounded-md transition-all duration-300 hover:bg-primary/5">Kurtis</a>
            <a href="#" className="text-primary hover:text-accent py-2 px-3 rounded-md transition-all duration-300 hover:bg-primary/5">Accessories</a>
            <a href="#" className="text-primary hover:text-accent py-2 px-3 rounded-md transition-all duration-300 hover:bg-primary/5">Collections</a>
          </div>
          <div className="flex items-center justify-around mt-4 pt-3 border-t border-primary/20 pb-4">
            <button className="interactive p-2 hover:bg-primary/10 rounded-full transition-all duration-300">
              <FiUser className="text-[20px] text-primary hover:text-accent transition-colors duration-300" />
            </button>
            <button className="interactive p-2 hover:bg-primary/10 rounded-full transition-all duration-300">
              <FiHeart className="text-[20px] text-primary hover:text-accent transition-colors duration-300" />
            </button>
            <button className="interactive p-2 hover:bg-primary/10 rounded-full transition-all duration-300">
              <FiShoppingCart className="text-[20px] text-primary hover:text-accent transition-colors duration-300" />
            </button>
            <button className="interactive p-2 hover:bg-primary/10 rounded-full transition-all duration-300">
              <FiSearch className="text-[20px] text-primary hover:text-accent transition-colors duration-300" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
