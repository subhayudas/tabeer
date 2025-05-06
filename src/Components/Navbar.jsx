import { FiShoppingCart, FiUser, FiHeart } from "react-icons/fi";
import { TbMenu } from "react-icons/tb";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  return (
    <>
      <div
        className={`nav fixed z-[999] w-full transition-all duration-300 ease-in-out opacity-0 glass ${
          scrolled ? 'py-3 shadow-md' : 'py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="logos">
                <div className="text-primary font-bold">
                  <h1 className="text-2xl md:text-3xl font-['Rozha_One'] tracking-wider">TABEER</h1>
                  <p className="text-[10px] md:text-xs tracking-widest text-accent">INDIAN ETHNIC WEAR</p>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <div className="links uppercase flex gap-4 lg:gap-8 text-[.7rem] text-primary font-medium">
                <a href="#" className="hover:text-accent transition-colors duration-300">Sarees</a>
                <a href="#" className="hover:text-accent transition-colors duration-300">Lehengas</a>
                <a href="#" className="hover:text-accent transition-colors duration-300">Kurtis</a>
                <a href="#" className="hover:text-accent transition-colors duration-300">Accessories</a>
                <a href="#" className="hover:text-accent transition-colors duration-300">Collections</a>
              </div>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-3 md:gap-5">
              <div className="hidden md:flex items-center gap-4 bg-primary/10 rounded-full px-4 py-2">
                <FiUser className="text-[17px] text-primary hover:text-accent cursor-pointer transition-colors duration-300" />
                <FiHeart className="text-[17px] text-primary hover:text-accent cursor-pointer transition-colors duration-300" />
                <FiShoppingCart className="text-[17px] text-primary hover:text-accent cursor-pointer transition-colors duration-300" />
              </div>

              {/* Mobile menu button */}
              <button
                className="text-primary p-1 rounded-md focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <TbMenu className="text-[24px]" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full glass-dark py-4 px-4 shadow-lg">
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-primary hover:text-accent py-2 px-3 rounded-md transition-colors duration-300">Sarees</a>
              <a href="#" className="text-primary hover:text-accent py-2 px-3 rounded-md transition-colors duration-300">Lehengas</a>
              <a href="#" className="text-primary hover:text-accent py-2 px-3 rounded-md transition-colors duration-300">Kurtis</a>
              <a href="#" className="text-primary hover:text-accent py-2 px-3 rounded-md transition-colors duration-300">Accessories</a>
              <a href="#" className="text-primary hover:text-accent py-2 px-3 rounded-md transition-colors duration-300">Collections</a>
            </div>
            <div className="flex items-center justify-around mt-4 pt-3 border-t border-primary/20">
              <FiUser className="text-[20px] text-primary hover:text-accent cursor-pointer transition-colors duration-300" />
              <FiHeart className="text-[20px] text-primary hover:text-accent cursor-pointer transition-colors duration-300" />
              <FiShoppingCart className="text-[20px] text-primary hover:text-accent cursor-pointer transition-colors duration-300" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
