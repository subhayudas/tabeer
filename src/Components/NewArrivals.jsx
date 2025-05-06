import { useState, useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiShoppingBag, FiHeart, FiEye, FiX, FiClock, FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

// Enhanced product data with more details
const newArrivals = [
  {
    id: 1,
    name: "Kanjeevaram Silk Saree",
    price: 18999,
    originalPrice: 22999,
    image: "/images/saree3.webp",
    category: "Sarees",
    arrivalDate: "3 days ago",
    rating: 4.8,
    reviews: 24,
    colors: ["#8B0000", "#006064", "#000000"],
    featured: true,
    description: "Handcrafted Kanjeevaram silk saree with intricate gold zari work and traditional motifs. Perfect for weddings and special occasions.",
    stock: 8,
    discount: 17
  },
  {
    id: 2,
    name: "Designer Anarkali Gown",
    price: 12499,
    originalPrice: 14999,
    image: "/images/anarkali.webp",
    category: "Anarkalis",
    arrivalDate: "1 week ago",
    rating: 4.6,
    reviews: 18,
    colors: ["#8B0000", "#006064", "#D4AF37"],
    featured: false,
    description: "Elegant Anarkali gown with embroidered bodice and flared silhouette. Ideal for festive occasions and celebrations.",
    stock: 12,
    discount: 16
  },
  {
    id: 3,
    name: "Embroidered Lehenga Choli",
    price: 32999,
    originalPrice: 38999,
    image: "/images/dress4.webp",
    category: "Lehengas",
    arrivalDate: "2 days ago",
    rating: 4.9,
    reviews: 32,
    colors: ["#D4AF37", "#8B0000", "#000000"],
    featured: false,
    description: "Stunning embroidered lehenga choli with mirror work and contemporary design. Perfect for weddings and special events.",
    stock: 5,
    discount: 15
  },
  {
    id: 4,
    name: "Block Print Cotton Kurti",
    price: 2499,
    originalPrice: 2999,
    image: "/images/dress.webp",
    category: "Kurtis",
    arrivalDate: "5 days ago",
    rating: 4.5,
    reviews: 42,
    colors: ["#006064", "#8B0000", "#D4AF37"],
    featured: false,
    description: "Comfortable cotton kurti with traditional block prints. Perfect for casual and everyday wear.",
    stock: 20,
    discount: 16
  },
  {
    id: 5,
    name: "Banarasi Silk Saree",
    price: 15999,
    originalPrice: 19999,
    image: "/images/saree2.webp",
    category: "Sarees",
    arrivalDate: "1 day ago",
    rating: 4.7,
    reviews: 15,
    colors: ["#D4AF37", "#8B0000", "#006064"],
    featured: false,
    description: "Exquisite Banarasi silk saree with intricate patterns and rich texture. Perfect for traditional ceremonies.",
    stock: 7,
    discount: 20
  },
  {
    id: 6,
    name: "Designer Palazzo Set",
    price: 4999,
    originalPrice: 5999,
    image: "/images/dress2.webp",
    category: "Kurtis",
    arrivalDate: "4 days ago",
    rating: 4.4,
    reviews: 28,
    colors: ["#006064", "#8B0000", "#000000"],
    featured: false,
    description: "Stylish palazzo set with printed kurta and solid palazzo pants. Perfect for casual outings and gatherings.",
    stock: 15,
    discount: 16
  }
];

const NewArrivals = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const productsRef = useRef([]);

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

    // Products staggered animation
    gsap.from(productsRef.current, {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
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

  return (
    <div ref={sectionRef} className="w-full bg-neutral-dark py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12" ref={titleRef}>
          <span className="inline-block bg-primary text-neutral text-xs font-bold px-3 py-1 rounded-full mb-3">
            JUST ARRIVED
          </span>
          <h2 className="text-3xl md:text-4xl font-['Rozha_One'] text-primary mb-3">New Arrivals</h2>
          <p className="text-accent-light max-w-2xl mx-auto">
            Discover our latest collection of handcrafted ethnic wear, fresh from the artisans' looms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {newArrivals.map((product, index) => (
            <div
              key={product.id}
              ref={el => productsRef.current[index] = el}
              className="group relative bg-neutral rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* New badge with animation */}
              <div className="absolute top-0 right-0 z-10">
                <div className="bg-secondary text-primary text-xs font-bold py-1 px-3 rounded-bl-lg shadow-md animate-pulse">
                  NEW
                </div>
              </div>

              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay with actions */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-3">
                    <button className="w-10 h-10 rounded-full bg-neutral flex items-center justify-center transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-neutral-dark">
                      <FiHeart className="text-primary" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary-light">
                      <FiShoppingBag className="text-neutral" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-secondary-light">
                      <FiEye className="text-primary" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-accent-light">{product.category}</span>
                  <span className="text-xs text-primary-light">{product.arrivalDate}</span>
                </div>
                <h3 className="text-primary font-medium text-lg mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold">{formatPrice(product.price)}</span>
                  <button className="text-xs bg-primary text-neutral px-3 py-1 rounded-full opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="bg-primary text-neutral px-8 py-3 rounded-full hover:bg-primary-light transition-colors duration-300 inline-flex items-center gap-2">
            View All New Arrivals
            <FiShoppingBag />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
