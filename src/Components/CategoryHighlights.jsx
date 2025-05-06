import { useState, useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiArrowRight, FiArrowLeft, FiChevronRight } from 'react-icons/fi';

const categories = [
  {
    id: 1,
    name: "Sarees",
    tagline: "Timeless Elegance",
    description: "Traditional & contemporary sarees for every occasion",
    image: "/images/saree.webp",
    color: "from-primary/80 to-primary/20",
    textColor: "text-neutral",
    accent: "border-primary"
  },
  {
    id: 2,
    name: "Lehengas",
    tagline: "Bridal Splendor",
    description: "Bridal & festive lehengas with intricate embroidery",
    image: "/images/dress2.webp",
    color: "from-secondary/80 to-secondary/20",
    textColor: "text-primary",
    accent: "border-secondary"
  },
  {
    id: 3,
    name: "Kurtis",
    tagline: "Everyday Grace",
    description: "Everyday & occasion kurtis in various styles",
    image: "/images/dress.webp",
    color: "from-accent/80 to-accent/20",
    textColor: "text-neutral",
    accent: "border-accent"
  },
  {
    id: 4,
    name: "Anarkalis",
    tagline: "Royal Charm",
    description: "Elegant floor-length anarkalis for special events",
    image: "/images/anarkali.webp",
    color: "from-primary-light/80 to-primary-light/20",
    textColor: "text-neutral",
    accent: "border-primary-light"
  },
  {
    id: 5,
    name: "Salwar Suits",
    tagline: "Classic Comfort",
    description: "Classic & modern salwar suits for all occasions",
    image: "/images/dress3.webp",
    color: "from-secondary-light/80 to-secondary-light/20",
    textColor: "text-primary",
    accent: "border-secondary-light"
  },
  {
    id: 6,
    name: "Dupattas",
    tagline: "Finishing Touch",
    description: "Handcrafted dupattas to complete your ethnic look",
    image: "/images/saree2.webp",
    color: "from-accent-light/80 to-accent-light/20",
    textColor: "text-neutral",
    accent: "border-accent-light"
  }
];

const CategoryHighlights = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const carouselRef = useRef(null);
  const categoryRefs = useRef([]);
  const featuredRef = useRef(null);
  const parallaxLayers = useRef([]);

  // Handle mouse movement for parallax effect
  const handleMouseMove = (e) => {
    if (!isHovering) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = sectionRef.current.getBoundingClientRect();

    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;

    setMousePosition({ x, y });
  };

  // Auto-rotate categories
  useEffect(() => {
    if (isHovering) return;

    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % categories.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovering]);

  // Apply parallax effect based on mouse position
  useEffect(() => {
    if (!isHovering || parallaxLayers.current.length === 0) return;

    parallaxLayers.current.forEach((layer, index) => {
      if (!layer) return;

      const depth = index * 10;
      const moveX = mousePosition.x * depth;
      const moveY = mousePosition.y * depth;

      gsap.to(layer, {
        x: moveX,
        y: moveY,
        duration: 1,
        ease: "power2.out"
      });
    });
  }, [mousePosition, isHovering]);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Title animation
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    // Featured category animation
    gsap.from(featuredRef.current, {
      scale: 0.9,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
        toggleActions: "play none none none"
      }
    });

    // Carousel animation
    gsap.from(carouselRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none none"
      }
    });

    // Category items staggered animation
    gsap.from(categoryRefs.current, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: carouselRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    // Set up scroll-triggered horizontal scroll for the carousel
    ScrollTrigger.create({
      trigger: carouselRef.current,
      start: "top 70%",
      end: "bottom 20%",
      onUpdate: (self) => {
        const progress = self.progress;
        const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
        carouselRef.current.scrollLeft = maxScroll * progress;
      }
    });
  }, []);

  // Handle category change
  const changeCategory = (index) => {
    setActiveCategory(index);
  };

  // Navigate to next/previous category
  const nextCategory = () => {
    setActiveCategory((prev) => (prev + 1) % categories.length);
  };

  const prevCategory = () => {
    setActiveCategory((prev) => (prev - 1 + categories.length) % categories.length);
  };

  return (
    <div
      ref={sectionRef}
      className="w-full bg-neutral py-16 md:py-24 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16" ref={titleRef}>
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm rounded-full mb-4 animate-pulse">
            Explore Our Collection
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-['Rozha_One'] text-primary mb-4">
            Discover Timeless Elegance
          </h2>
          <p className="text-accent-light max-w-2xl mx-auto">
            Explore our curated categories of authentic Indian ethnic wear, handcrafted with love and tradition
          </p>
        </div>

        {/* Featured Category Display */}
        <div
          ref={featuredRef}
          className="relative w-full h-[70vh] mb-16 rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Background Image with Parallax Effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              ref={el => parallaxLayers.current[0] = el}
              className="w-[110%] h-[110%] -ml-[5%] -mt-[5%]"
            >
              <img
                src={categories[activeCategory].image}
                alt={categories[activeCategory].name}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out"
              />
            </div>
          </div>

          {/* Gradient Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-r ${categories[activeCategory].color} opacity-60 transition-colors duration-700`}
          ></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
            <div
              ref={el => parallaxLayers.current[1] = el}
              className="transform transition-all duration-700"
            >
              <h3 className={`text-6xl md:text-7xl lg:text-8xl font-['Rozha_One'] ${categories[activeCategory].textColor} mb-4 tracking-tight`}>
                {categories[activeCategory].name}
              </h3>
              <p className={`text-xl md:text-2xl ${categories[activeCategory].textColor} mb-8 font-light`}>
                {categories[activeCategory].tagline}
              </p>
              <p className={`max-w-xl mx-auto ${categories[activeCategory].textColor} mb-10 text-lg`}>
                {categories[activeCategory].description}
              </p>
              <button
                className={`${categories[activeCategory].accent} border-2 ${categories[activeCategory].textColor} px-8 py-3 rounded-full flex items-center gap-2 mx-auto hover:bg-white/10 transition-colors`}
              >
                Explore Collection
                <FiArrowRight className="animate-pulse" />
              </button>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevCategory}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-neutral/80 flex items-center justify-center text-primary hover:bg-neutral transition-colors z-10"
            aria-label="Previous category"
          >
            <FiArrowLeft className="text-xl" />
          </button>
          <button
            onClick={nextCategory}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-neutral/80 flex items-center justify-center text-primary hover:bg-neutral transition-colors z-10"
            aria-label="Next category"
          >
            <FiArrowRight className="text-xl" />
          </button>

          {/* Category Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => changeCategory(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeCategory === index
                    ? `${categories[activeCategory].accent} border-2 bg-transparent w-4 h-4`
                    : 'bg-neutral/50'
                }`}
                aria-label={`View ${category.name} category`}
              />
            ))}
          </div>
        </div>

        {/* Category Carousel */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-['Rozha_One'] text-primary">Browse Categories</h3>
            <div className="flex items-center gap-3 text-sm text-accent">
              <span>Scroll to explore</span>
              <FiChevronRight className="animate-bounce" />
            </div>
          </div>

          <div
            ref={carouselRef}
            className="flex overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory"
            style={{ scrollBehavior: 'smooth' }}
          >
            {categories.map((category, index) => (
              <div
                key={category.id}
                ref={el => categoryRefs.current[index] = el}
                className={`snap-start flex-shrink-0 w-[280px] mr-6 group cursor-pointer ${
                  activeCategory === index ? 'scale-105' : ''
                }`}
                onClick={() => changeCategory(index)}
              >
                <div
                  className={`relative h-[350px] rounded-xl overflow-hidden shadow-lg transition-all duration-500 transform perspective-1000 ${
                    activeCategory === index
                      ? `ring-2 ${category.accent} ring-offset-2 ring-offset-neutral`
                      : 'hover:scale-[1.02] hover:shadow-xl'
                  }`}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Category Image */}
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-70 transition-opacity duration-500 group-hover:opacity-80`}
                  ></div>

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 transform transition-transform duration-500">
                    <h4 className={`text-2xl font-['Rozha_One'] ${category.textColor} mb-2 group-hover:-translate-y-2 transition-transform duration-500`}>
                      {category.name}
                    </h4>
                    <p className={`${category.textColor} text-sm mb-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500`}>
                      {category.description}
                    </p>
                    <div className={`${category.accent} border-b-2 w-0 group-hover:w-full transition-all duration-500 mb-2`}></div>
                    <div className="flex justify-between items-center">
                      <span className={`${category.textColor} text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                        {category.tagline}
                      </span>
                      <FiArrowRight className={`${category.textColor} transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500`} />
                    </div>
                  </div>

                  {/* Active Indicator */}
                  {activeCategory === index && (
                    <div className="absolute top-3 right-3 w-3 h-3 rounded-full bg-white animate-pulse"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryHighlights;
