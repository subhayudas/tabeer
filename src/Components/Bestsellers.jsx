import { useState, useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiStar, FiHeart, FiShoppingBag, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const bestsellers = [
  {
    id: 1,
    name: "Banarasi Silk Saree",
    price: 12999,
    discountedPrice: 9999,
    rating: 4.8,
    reviews: 124,
    image: "/images/saree.webp",
    category: "Sarees",
    isNew: false,
    isBestseller: true
  },
  {
    id: 2,
    name: "Bridal Lehenga - Royal Collection",
    price: 45999,
    discountedPrice: null,
    rating: 4.9,
    reviews: 86,
    image: "/images/dress2.webp",
    category: "Lehengas",
    isNew: false,
    isBestseller: true
  },
  {
    id: 3,
    name: "Embroidered Anarkali Suit",
    price: 8999,
    discountedPrice: 7499,
    rating: 4.7,
    reviews: 92,
    image: "/images/anarkali.webp",
    category: "Anarkalis",
    isNew: true,
    isBestseller: true
  },
  {
    id: 4,
    name: "Chanderi Cotton Kurti",
    price: 2999,
    discountedPrice: 2499,
    rating: 4.6,
    reviews: 158,
    image: "/images/dress.webp",
    category: "Kurtis",
    isNew: false,
    isBestseller: true
  },
  {
    id: 5,
    name: "Phulkari Dupatta",
    price: 3999,
    discountedPrice: 3499,
    rating: 4.8,
    reviews: 76,
    image: "/images/saree2.webp",
    category: "Dupattas",
    isNew: true,
    isBestseller: true
  },
  {
    id: 6,
    name: "Zari Work Salwar Suit",
    price: 7999,
    discountedPrice: null,
    rating: 4.7,
    reviews: 64,
    image: "/images/dress3.webp",
    category: "Salwar Suits",
    isNew: false,
    isBestseller: true
  }
];

const Bestsellers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(null);
  const carouselRef = useRef(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  const itemsPerView = 3; // Number of items visible at once
  const maxIndex = bestsellers.length - itemsPerView;

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) {
        setCurrentIndex(prev => {
          if (prev >= maxIndex) return 0;
          return prev + 1;
        });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovering, maxIndex]);

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

    // Carousel animation
    gsap.from(carouselRef.current, {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none none"
      }
    });
  }, []);

  // Format price to Indian Rupees
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  // Generate star rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FiStar
          key={i}
          className={`${i <= rating ? 'text-secondary fill-secondary' : 'text-neutral-dark'} text-xs`}
        />
      );
    }
    return stars;
  };

  return (
    <div ref={sectionRef} className="w-full bg-neutral py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center mb-10" ref={titleRef}>
          <div>
            <h2 className="text-3xl md:text-4xl font-['Rozha_One'] text-primary mb-2">Bestsellers</h2>
            <p className="text-accent-light">Our most loved pieces, handpicked for you</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`p-2 rounded-full ${currentIndex === 0 ? 'bg-neutral-dark text-primary/50' : 'bg-primary text-neutral'} transition-colors`}
              aria-label="Previous slide"
            >
              <FiChevronLeft className="text-lg" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex === maxIndex}
              className={`p-2 rounded-full ${currentIndex === maxIndex ? 'bg-neutral-dark text-primary/50' : 'bg-primary text-neutral'} transition-colors`}
              aria-label="Next slide"
            >
              <FiChevronRight className="text-lg" />
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
          >
            {bestsellers.map((product) => (
              <div
                key={product.id}
                className="min-w-[33.333%] px-3"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="relative aspect-[3/4] overflow-hidden group">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      {product.isBestseller && (
                        <span className="bg-secondary text-primary text-xs font-bold px-2 py-1 rounded">
                          Bestseller
                        </span>
                      )}
                      {product.isNew && (
                        <span className="bg-primary text-neutral text-xs font-bold px-2 py-1 rounded">
                          New
                        </span>
                      )}
                    </div>

                    {/* Quick actions */}
                    <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      <button className="bg-neutral w-8 h-8 rounded-full flex items-center justify-center hover:bg-neutral-dark transition-colors">
                        <FiHeart className="text-primary" />
                      </button>
                      <button className="bg-primary w-8 h-8 rounded-full flex items-center justify-center hover:bg-primary-light transition-colors">
                        <FiShoppingBag className="text-neutral" />
                      </button>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-primary font-medium text-lg line-clamp-1">{product.name}</h3>
                      <span className="text-xs text-accent-light">{product.category}</span>
                    </div>

                    <div className="flex items-center gap-1 mb-2">
                      {renderStars(product.rating)}
                      <span className="text-xs text-accent-light ml-1">({product.reviews})</span>
                    </div>

                    <div className="flex items-center gap-2">
                      {product.discountedPrice ? (
                        <>
                          <span className="text-primary font-bold">{formatPrice(product.discountedPrice)}</span>
                          <span className="text-accent-light text-sm line-through">{formatPrice(product.price)}</span>
                        </>
                      ) : (
                        <span className="text-primary font-bold">{formatPrice(product.price)}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bestsellers;
