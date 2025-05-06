import { FiShoppingCart, FiUser, FiHeart, FiSearch } from "react-icons/fi";
import { TbMenu } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import { RiShoppingBag3Line } from "react-icons/ri";
import { useState, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartItems, setCartItems] = useState(3); // Mock cart items count

  const navRef = useRef(null);
  const linksRef = useRef([]);
  const iconsRef = useRef([]);
  const mobileMenuRef = useRef(null);
  const searchInputRef = useRef(null);
  const logoRef = useRef(null);

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

    // Logo animation
    gsap.from(logoRef.current, {
      y: -30,
      opacity: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.5)"
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
      // First animate the container
      gsap.fromTo(mobileMenuRef.current,
        { height: 0, opacity: 0 },
        {
          height: "auto",
          opacity: 1,
          duration: 0.4,
          ease: "power3.out"
        }
      );

      // Then animate menu items with a staggered effect
      const menuItems = mobileMenuRef.current.querySelectorAll('a, div');
      gsap.fromTo(menuItems,
        { y: 20, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.06,
          delay: 0.2,
          ease: "back.out(1.2)"
        }
      );
    } else if (mobileMenuRef.current.offsetHeight > 0) {
      // Animate closing the menu
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power3.in"
      });
    }
  }, [mobileMenuOpen]);

  // Handle search input animation
  useEffect(() => {
    if (!searchInputRef.current) return;

    if (searchOpen) {
      gsap.fromTo(searchInputRef.current,
        { width: 0, opacity: 0, x: 20 },
        {
          width: "240px",
          opacity: 1,
          x: 0,
          duration: 0.4,
          ease: "power3.out"
        }
      );
      // Add a small delay before focusing to ensure the animation has started
      setTimeout(() => {
        searchInputRef.current.focus();
      }, 100);
    } else {
      gsap.to(searchInputRef.current, {
        width: 0,
        opacity: 0,
        x: 10,
        duration: 0.3,
        ease: "power3.in"
      });
    }
  }, [searchOpen]);

  return (
    <>
      <div
        ref={navRef}
        className={`nav fixed z-[999] w-full transition-all duration-500 ease-in-out opacity-0 ${
          scrolled
            ? 'py-2 shadow-lg bg-gradient-to-r from-neutral/80 via-neutral/90 to-neutral/80 backdrop-blur-md border-b border-primary/10'
            : 'py-4 bg-gradient-to-r from-neutral/40 via-neutral/60 to-neutral/40 backdrop-blur-sm'
        }`}
        style={{
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
        }}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo with animation */}
            <div className="flex-shrink-0 overflow-hidden">
              <div className="logos relative" ref={logoRef}>
                <div className="text-primary font-bold relative">
                  <h1 className="text-2xl md:text-3xl font-['Rozha_One'] tracking-wider animate-slideDown">
                    TABEER
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary/30 group-hover:w-full transition-all duration-300"></span>
                  </h1>
                  <p className="text-[10px] md:text-xs tracking-widest text-accent animate-slideUp delay-300">INDIAN ETHNIC WEAR</p>
                </div>
              </div>
            </div>

            {/* Desktop Navigation with animations */}
            <div className="hidden md:flex items-center">
              <div className="links uppercase flex gap-5 lg:gap-10 text-[.75rem] text-primary font-medium">
                <a
                  href="#"
                  ref={el => linksRef.current[0] = el}
                  className="hover:text-accent transition-all duration-300 hover:scale-105 relative group py-1"
                >
                  Sarees
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
                </a>
                <a
                  href="#"
                  ref={el => linksRef.current[1] = el}
                  className="hover:text-accent transition-all duration-300 hover:scale-105 relative group py-1"
                >
                  Lehengas
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
                </a>
                <a
                  href="#"
                  ref={el => linksRef.current[2] = el}
                  className="hover:text-accent transition-all duration-300 hover:scale-105 relative group py-1"
                >
                  Kurtis
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
                </a>
                <a
                  href="#"
                  ref={el => linksRef.current[3] = el}
                  className="hover:text-accent transition-all duration-300 hover:scale-105 relative group py-1"
                >
                  Accessories
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
                </a>
                <a
                  href="#"
                  ref={el => linksRef.current[4] = el}
                  className="hover:text-accent transition-all duration-300 hover:scale-105 relative group py-1"
                >
                  Collections
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
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
                  placeholder="Search for products..."
                  className="bg-neutral-dark/30 text-primary text-sm rounded-full pl-5 pr-12 py-2 focus:outline-none focus:ring-1 focus:ring-primary/50 w-0 opacity-0 shadow-inner"
                />
                <button
                  ref={el => iconsRef.current[0] = el}
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="absolute right-3 text-primary hover:text-accent transition-colors duration-300 p-1 interactive"
                  aria-label="Search"
                >
                  <FiSearch className="text-[18px]" />
                </button>
              </div>

              <div className="hidden md:flex items-center gap-5 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-full px-5 py-2.5 shadow-sm border border-primary/10">
                <button
                  ref={el => iconsRef.current[1] = el}
                  className="interactive relative group"
                  aria-label="User account"
                >
                  <FiUser className="text-[18px] text-primary group-hover:text-accent cursor-pointer transition-colors duration-300" />
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                </button>
                <button
                  ref={el => iconsRef.current[2] = el}
                  className="interactive relative group"
                  aria-label="Wishlist"
                >
                  <FiHeart className="text-[18px] text-primary group-hover:text-accent cursor-pointer transition-colors duration-300 group-hover:animate-heartbeat" />
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                </button>
                <button
                  ref={el => iconsRef.current[3] = el}
                  className="interactive relative group"
                  aria-label="Shopping cart"
                >
                  <div className="relative">
                    <FiShoppingCart className="text-[18px] text-primary group-hover:text-accent cursor-pointer transition-colors duration-300" />
                    {cartItems > 0 && (
                      <span className="absolute -top-2 -right-2 bg-accent text-neutral text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center animate-fadeIn">
                        {cartItems}
                      </span>
                    )}
                  </div>
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                </button>
              </div>

              {/* Mobile menu button with animation */}
              <button
                ref={el => iconsRef.current[4] = el}
                className="text-primary p-1.5 rounded-md focus:outline-none interactive hover:bg-primary/10 transition-colors duration-300 border border-primary/20"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                <TbMenu className={`text-[22px] transition-transform duration-500 ${mobileMenuOpen ? 'rotate-90' : ''}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu with animation */}
        <div
          ref={mobileMenuRef}
          className={`md:hidden absolute top-full left-0 w-full py-0 px-4 shadow-lg overflow-hidden ${!mobileMenuOpen ? 'h-0' : ''}`}
          style={{
            opacity: mobileMenuOpen ? 1 : 0,
            height: 0,
            background: 'rgba(139, 0, 0, 0.05)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(139, 0, 0, 0.1)'
          }}
        >
          <div className="flex flex-col space-y-3 py-5">
            <a href="#" className="text-primary hover:text-accent py-2.5 px-4 rounded-md transition-all duration-300 hover:bg-primary/5 flex items-center justify-between group">
              <span className="group-hover:translate-x-1 transition-transform duration-300">Sarees</span>
              <span className="text-primary/40 group-hover:text-accent text-xs group-hover:translate-x-1 transition-all duration-300">→</span>
            </a>
            <a href="#" className="text-primary hover:text-accent py-2.5 px-4 rounded-md transition-all duration-300 hover:bg-primary/5 flex items-center justify-between group">
              <span className="group-hover:translate-x-1 transition-transform duration-300">Lehengas</span>
              <span className="text-primary/40 group-hover:text-accent text-xs group-hover:translate-x-1 transition-all duration-300">→</span>
            </a>
            <a href="#" className="text-primary hover:text-accent py-2.5 px-4 rounded-md transition-all duration-300 hover:bg-primary/5 flex items-center justify-between group">
              <span className="group-hover:translate-x-1 transition-transform duration-300">Kurtis</span>
              <span className="text-primary/40 group-hover:text-accent text-xs group-hover:translate-x-1 transition-all duration-300">→</span>
            </a>
            <a href="#" className="text-primary hover:text-accent py-2.5 px-4 rounded-md transition-all duration-300 hover:bg-primary/5 flex items-center justify-between group">
              <span className="group-hover:translate-x-1 transition-transform duration-300">Accessories</span>
              <span className="text-primary/40 group-hover:text-accent text-xs group-hover:translate-x-1 transition-all duration-300">→</span>
            </a>
            <a href="#" className="text-primary hover:text-accent py-2.5 px-4 rounded-md transition-all duration-300 hover:bg-primary/5 flex items-center justify-between group">
              <span className="group-hover:translate-x-1 transition-transform duration-300">Collections</span>
              <span className="text-primary/40 group-hover:text-accent text-xs group-hover:translate-x-1 transition-all duration-300">→</span>
            </a>
          </div>

          <div className="mt-4 relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-neutral-dark/20 text-primary text-sm rounded-md pl-4 pr-10 py-2.5 focus:outline-none focus:ring-1 focus:ring-primary/30 border border-primary/10"
            />
            <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-[18px] text-primary/70" />
          </div>

          <div className="flex items-center justify-around mt-5 pt-3 border-t border-primary/10 pb-5">
            <button className="interactive p-2.5 hover:bg-primary/10 rounded-full transition-all duration-300 relative group">
              <FiUser className="text-[20px] text-primary group-hover:text-accent transition-colors duration-300" />
              <span className="absolute -bottom-1 text-[10px] w-full text-center left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary/70">Account</span>
            </button>
            <button className="interactive p-2.5 hover:bg-primary/10 rounded-full transition-all duration-300 relative group">
              <FiHeart className="text-[20px] text-primary group-hover:text-accent transition-colors duration-300" />
              <span className="absolute -bottom-1 text-[10px] w-full text-center left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary/70">Wishlist</span>
            </button>
            <button className="interactive p-2.5 hover:bg-primary/10 rounded-full transition-all duration-300 relative group">
              <div className="relative">
                <FiShoppingCart className="text-[20px] text-primary group-hover:text-accent transition-colors duration-300" />
                {cartItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent text-neutral text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {cartItems}
                  </span>
                )}
              </div>
              <span className="absolute -bottom-1 text-[10px] w-full text-center left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary/70">Cart</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
